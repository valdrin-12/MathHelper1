#!/usr/bin/env node
// Integration test for Google sign-in against a throw-away Postgres in Docker (never the real database).
// Google's token check is replaced by a stub; everything else (routes, SQL, sessions) is real.
//   node scripts/testGoogleAuth.js          (needs Docker)
const { execSync, spawnSync } = require('child_process');
const path = require('path');

const PORT_DB = 55432;
const NAME = 'mathhelper-google-test-db';
const URL = `postgresql://postgres:postgres@localhost:${PORT_DB}/postgres`;
const sh = (cmd) => execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();

let started = false;
const cleanup = () => { try { sh(`docker rm -f ${NAME}`); } catch { /* already gone */ } };

async function waitForDb() {
  for (let i = 0; i < 60; i++) {
    const r = spawnSync('docker', ['exec', NAME, 'pg_isready', '-U', 'postgres'], { encoding: 'utf8' });
    if (r.status === 0) {
      // pg_isready can be true during the init restart; a real query is the safer check
      const q = spawnSync('docker', ['exec', NAME, 'psql', '-U', 'postgres', '-tAc', 'select 1'], { encoding: 'utf8' });
      if (q.status === 0 && q.stdout.trim() === '1') return;
    }
    await new Promise((r2) => setTimeout(r2, 1000));
  }
  throw new Error('database did not start');
}

(async () => {
  cleanup();
  sh(`docker run -d --name ${NAME} -e POSTGRES_PASSWORD=postgres -p ${PORT_DB}:5432 postgres:16-alpine`);
  started = true;
  await waitForDb();

  process.env.DATABASE_URL = URL;
  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
  const backend = path.join(__dirname, '..');
  // Two runs: the second one proves the migrations (incl. 013) are safe to repeat
  for (let i = 0; i < 2; i++) sh(`cd ${backend} && DATABASE_URL=${URL} node migrations/migrate.js`);

  const googleAuth = require(path.join(backend, 'src/services/googleAuthService'));
  const userModel = require(path.join(backend, 'src/models/userModel'));
  const pool = require(path.join(backend, 'src/config/database'));
  const app = require(path.join(backend, 'src/app'));

  // token string → what "Google" says about it
  const tokens = {};
  googleAuth.verifyGoogleIdToken = async (t) => {
    if (!tokens[t]) throw new Error('bad token');
    return tokens[t];
  };
  const T = (name, profile) => { const t = `${name}-${'x'.repeat(24)}`; tokens[t] = profile; return t; };

  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const call = async (method, url, body, token) => {
    const res = await fetch(base + url, {
      method,
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    return { status: res.status, body: await res.json().catch(() => ({})) };
  };

  let pass = 0;
  const fails = [];
  const check = (name, cond, extra) => { if (cond) pass++; else fails.push(`${name} ${extra ? JSON.stringify(extra) : ''}`); };

  // 1. new Google user
  const aliceTok = T('alice', { sub: 'g-alice', email: 'Alice@Example.com', emailVerified: true, name: 'Alice A' });
  let r = await call('POST', '/api/auth/google', { idToken: aliceTok, language: 'en' });
  check('new user: 200', r.status === 200, r);
  check('new user: isNewUser', r.body.isNewUser === true);
  check('new user: email lower-cased', r.body.user?.email === 'alice@example.com', r.body.user);
  check('new user: hasPassword false', r.body.user?.hasPassword === false, r.body.user);
  check('new user: googleLinked', r.body.user?.googleLinked === true);
  check('new user: free tier', r.body.user?.tier === 'free');
  const aliceId = r.body.user?.id;
  const aliceAccess = r.body.accessToken;
  r = await call('GET', '/api/auth/me', null, aliceAccess);
  check('session works on /me', r.status === 200 && r.body.user?.id === aliceId, r);

  // 2. same Google account again → same user, no duplicate
  r = await call('POST', '/api/auth/google', { idToken: aliceTok });
  check('returning user: 200', r.status === 200, r);
  check('returning user: same id', r.body.user?.id === aliceId);
  check('returning user: not new', r.body.isNewUser === false);
  const { rows: countRows } = await pool.query("SELECT COUNT(*)::int AS n FROM users WHERE email = 'alice@example.com'");
  check('no duplicate account', countRows[0].n === 1, countRows);

  // 3. rejected tokens
  r = await call('POST', '/api/auth/google', { idToken: 'not-a-real-token-' + 'y'.repeat(20) });
  check('invalid token: 401', r.status === 401 && r.body.code === 'INVALID_GOOGLE_TOKEN', r);
  const unverified = T('unverified', { sub: 'g-u', email: 'u@example.com', emailVerified: false, name: 'U' });
  r = await call('POST', '/api/auth/google', { idToken: unverified });
  check('unverified email: 401', r.status === 401 && r.body.code === 'GOOGLE_EMAIL_NOT_VERIFIED', r);
  r = await call('POST', '/api/auth/google', {});
  check('missing token: 400', r.status === 400, r);
  r = await call('POST', '/api/auth/google', { idToken: aliceTok, language: 'xx' });
  check('bad language: 400', r.status === 400, r);
  const { rows: uRows } = await pool.query("SELECT COUNT(*)::int AS n FROM users WHERE email = 'u@example.com'");
  check('unverified email creates nothing', uRows[0].n === 0);

  // 4. password sign-in is impossible for a Google-only account, and not distinguishable from a wrong password
  r = await call('POST', '/api/auth/login', { email: 'alice@example.com', password: 'whatever123' });
  check('google-only account: password login → 401 INVALID_CREDENTIALS', r.status === 401 && r.body.code === 'INVALID_CREDENTIALS', r);

  // 5. a Google-only account can add a password but not change its email
  r = await call('PUT', '/api/auth/profile', { email: 'other@example.com' }, aliceAccess);
  check('google-only: email change blocked', r.status === 400 && r.body.code === 'SET_PASSWORD_FIRST', r);
  r = await call('PUT', '/api/auth/profile', { password: 'a-brand-new-password' }, aliceAccess);
  check('google-only: can set a password', r.status === 200 && r.body.user?.hasPassword === true, r);
  r = await call('POST', '/api/auth/login', { email: 'alice@example.com', password: 'a-brand-new-password' });
  check('after setting a password, password login works', r.status === 200, r);

  // 6. pre-registered password account + Google with the same verified email → linked, old password dropped, sessions revoked
  const victim = await userModel.createUser({ name: 'Victim', email: 'victim@example.com', password: 'attacker-chosen-pw', language: 'al' });
  let r0 = await call('POST', '/api/auth/login', { email: 'victim@example.com', password: 'attacker-chosen-pw' });
  check('setup: password account can log in', r0.status === 200, r0);
  const attackerRefresh = r0.body.refreshToken;
  const victimTok = T('victim', { sub: 'g-victim', email: 'victim@example.com', emailVerified: true, name: 'Real Victim' });
  r = await call('POST', '/api/auth/google', { idToken: victimTok });
  check('link: 200 on the same account', r.status === 200 && r.body.user?.id === victim.id, r);
  check('link: flagged as linkedExisting', r.body.linkedExisting === true, r.body);
  check('link: account has no password now', r.body.user?.hasPassword === false);
  r = await call('POST', '/api/auth/login', { email: 'victim@example.com', password: 'attacker-chosen-pw' });
  check('link: the old password no longer works', r.status === 401, r);
  r = await call('POST', '/api/auth/refresh', { refreshToken: attackerRefresh });
  check('link: old sessions are revoked', r.status === 401, r);
  const { rows: subRows } = await pool.query("SELECT google_id FROM users WHERE id = $1", [victim.id]);
  check('link: google id stored', subRows[0].google_id === 'g-victim');

  // 7. email already linked to a different Google identity
  const otherGoogle = T('other', { sub: 'g-someone-else', email: 'victim@example.com', emailVerified: true, name: 'Else' });
  r = await call('POST', '/api/auth/google', { idToken: otherGoogle });
  check('different Google id for a linked email: 409', r.status === 409 && r.body.code === 'GOOGLE_ACCOUNT_CONFLICT', r);

  // 8. deleting a Google-only account needs a fresh token of the same Google account
  const bobTok = T('bob', { sub: 'g-bob', email: 'bob@example.com', emailVerified: true, name: 'Bob' });
  r = await call('POST', '/api/auth/google', { idToken: bobTok });
  const bobAccess = r.body.accessToken;
  const bobId = r.body.user?.id;
  r = await call('DELETE', '/api/auth/account', {}, bobAccess);
  check('delete without confirmation: 400 GOOGLE_REAUTH_REQUIRED', r.status === 400 && r.body.code === 'GOOGLE_REAUTH_REQUIRED', r);
  r = await call('DELETE', '/api/auth/account', { password: 'guess' }, bobAccess);
  check('delete with a password on a password-less account: 400', r.status === 400, r);
  r = await call('DELETE', '/api/auth/account', { idToken: aliceTok }, bobAccess);
  check("delete with someone else's Google token: 401", r.status === 401 && r.body.code === 'INVALID_GOOGLE_TOKEN', r);
  r = await call('DELETE', '/api/auth/account', { idToken: 'garbage-' + 'z'.repeat(20) }, bobAccess);
  check('delete with a bad token: 401', r.status === 401, r);
  r = await call('DELETE', '/api/auth/account', { idToken: bobTok }, bobAccess);
  check('delete with the right Google token: 200', r.status === 200, r);
  const { rows: gone } = await pool.query('SELECT 1 FROM users WHERE id = $1', [bobId]);
  check('account is gone', gone.length === 0);

  // 9. password accounts keep working exactly as before
  const carol = await call('POST', '/api/auth/register', { name: 'Carol', email: 'carol@example.com', password: 'carol-password-1' });
  check('register still works', carol.status === 201 && carol.body.user?.hasPassword === true, carol);
  r = await call('DELETE', '/api/auth/account', {}, carol.body.accessToken);
  check('delete needs the password: 400', r.status === 400 && r.body.code === 'PASSWORD_REQUIRED', r);
  r = await call('DELETE', '/api/auth/account', { password: 'wrong-password' }, carol.body.accessToken);
  check('delete with a wrong password: 401', r.status === 401, r);
  r = await call('PUT', '/api/auth/profile', { password: 'new-carol-pw-2' }, carol.body.accessToken);
  check('password change still needs the current password', r.status === 400 && r.body.code === 'CURRENT_PASSWORD_REQUIRED', r);
  r = await call('PUT', '/api/auth/profile', { password: 'new-carol-pw-2', currentPassword: 'carol-password-1' }, carol.body.accessToken);
  check('password change with the current password works', r.status === 200, r);
  r = await call('DELETE', '/api/auth/account', { password: 'new-carol-pw-2' }, carol.body.accessToken);
  check('delete with the right password: 200', r.status === 200, r);

  // 11. a guest's progress is added to the account after sign-in
  const gina = await call('POST', '/api/auth/register', { name: 'Gina', email: 'gina@example.com', password: 'gina-password-1' });
  const ginaTok = gina.body.accessToken;
  const today = new Date().toISOString().slice(0, 10);
  const dayKey = (n) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
  await call('POST', '/api/stats/problem-solved', { localDate: today }, ginaTok); // already active today on the account
  r = await call('POST', '/api/stats/import-guest', {
    localDate: today,
    dailyActivity: { [dayKey(2)]: { problems: 3 }, [dayKey(1)]: { problems: 1, quizzes: 1 }, [today]: { problems: 2, courses: 1 } },
    completedCourses: [{ courseId: 'arith-001', title: 'Numbers', completedAt: new Date().toISOString() }],
    completedQuizzes: [{ quizId: 'arith-easy', title: 'Basic', score: 9, total: 13, completedAt: new Date(Date.now() - 86400000).toISOString() }],
  }, ginaTok);
  check('import guest progress: 200', r.status === 200 && r.body.imported?.days === 3, r);
  r = await call('GET', `/api/stats?today=${today}`, null, ginaTok);
  const st = r.body.stats || {};
  check('import: today counts added to the account\'s own', st.dailyActivity?.[today]?.problems === 3, st.dailyActivity);
  check('import: course and quiz added', st.completedCourses?.length === 1 && st.completedQuizzes?.length === 1 && st.completedQuizzes[0].percentage === 69, st);
  check('import: streak rebuilt over 3 days', st.streak?.current === 3 && st.streak?.longest === 3, st.streak);
  r = await call('POST', '/api/stats/import-guest', { completedCourses: [{ courseId: 'arith-001', title: 'Numbers' }] }, ginaTok);
  const { rows: cc } = await pool.query("SELECT COUNT(*)::int AS n FROM completed_courses c JOIN users u ON u.id = c.user_id WHERE u.email = 'gina@example.com'");
  check('import: a course is never counted twice', r.status === 200 && cc[0].n === 1, { r, cc });
  r = await call('POST', '/api/stats/import-guest', { dailyActivity: { '2999-01-01': { problems: 1 } } }, ginaTok);
  check('import: future day rejected', r.status === 400, r);
  r = await call('POST', '/api/stats/import-guest', { dailyActivity: { [today]: { problems: 100000 } } }, ginaTok);
  check('import: absurd count rejected', r.status === 400, r);
  r = await call('POST', '/api/stats/import-guest', { completedQuizzes: [{ quizId: 'q', title: 'Q', score: 20, total: 10 }] }, ginaTok);
  check('import: score above total rejected', r.status === 400, r);
  r = await call('POST', '/api/stats/import-guest', { dailyActivity: {} });
  check('import: needs a session', r.status === 401, r);

  server.close();
  await pool.end();
  console.log(`${pass}/${pass + fails.length} passed`);
  if (fails.length) { console.log('\nFailures:\n  ' + fails.join('\n  ')); process.exitCode = 1; }
})().catch((e) => { console.error('Test run failed:', e); process.exitCode = 1; })
  .finally(() => { if (started) cleanup(); setTimeout(() => process.exit(process.exitCode || 0), 200); });
