// XP, levels and topic mastery, derived from the stats the backend already stores
// (completedQuizzes, completedCourses, dailyActivity, streak) — no backend changes.
// Two things the backend does not know about are kept in a small per-user local ledger:
// XP earned in "practise mistakes" attempts (not recorded in stats) and XP spent on hints.
import { useEffect, useMemo, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserScopedKey } from '../auth/userStorage';

export const XP_RULES = {
  perCorrect: 10,          // per correct quiz answer
  perfectBonus: 25,        // 100% on a quiz
  repeatFactor: 0.5,       // attempts of the same quiz after REPEAT_FULL_XP earn half XP
  repeatFullXp: 3,
  perCourse: 50,
  perProblem: 5,
  perStreakDay: 10,        // per day of the longest streak (never decreases)
  maxStreakDays: 60,
  practiceMistakesPerCorrect: 5, // reduced XP for "practise mistakes" attempts
  hintCost: { practice: 2, test: 5 },
};

export const DIFFICULTY_WEIGHT = { beginner: 1, intermediate: 2, advanced: 3 };
export const LEVEL_NAME_COUNT = 10;

// ─── Quiz XP ───

/** XP for one recorded quiz attempt. `previousAttempts` = earlier recorded attempts of the same quiz. */
export function quizEntryXp(score, total, previousAttempts = 0) {
  const s = Math.max(0, Number(score) || 0);
  const tot = Math.max(0, Number(total) || 0);
  let xp = s * XP_RULES.perCorrect + (tot > 0 && s >= tot ? XP_RULES.perfectBonus : 0);
  if (previousAttempts >= XP_RULES.repeatFullXp) xp = Math.round(xp * XP_RULES.repeatFactor);
  return xp;
}

export const hintCost = (mode) => XP_RULES.hintCost[mode] ?? XP_RULES.hintCost.practice;

/**
 * XP for an attempt that just finished (shown on the result screen).
 * @returns {{ base: number, hintPenalty: number, gained: number }}
 */
export function computeAttemptXp({ correct, total, hintsUsed = 0, mode = 'practice', isMistakesPractice = false, previousAttempts = 0 }) {
  const base = isMistakesPractice
    ? correct * XP_RULES.practiceMistakesPerCorrect
    : quizEntryXp(correct, total, previousAttempts);
  // Hints can't make an attempt worth less than 0 XP
  const hintPenalty = Math.min(base, hintsUsed * hintCost(mode));
  return { base, hintPenalty, gained: base - hintPenalty };
}

// ─── Total XP ───

/**
 * @param stats  StatsContext stats
 * @param ledger local adjustment (number): practise-mistakes XP minus hint costs
 */
export function computeXp(stats, ledger = 0) {
  const s = stats || {};
  const seen = {};
  let quizzes = 0;
  for (const q of s.completedQuizzes || []) {
    const prev = seen[q.quizId] || 0;
    quizzes += quizEntryXp(q.score, q.total, prev);
    seen[q.quizId] = prev + 1;
  }
  const courses = (s.completedCourses?.length || 0) * XP_RULES.perCourse;
  const problemCount = Object.values(s.dailyActivity || {}).reduce((sum, d) => sum + (d?.problems || 0), 0);
  const problems = problemCount * XP_RULES.perProblem;
  const streak = Math.min(s.streak?.longest || 0, XP_RULES.maxStreakDays) * XP_RULES.perStreakDay;
  const adjustments = Number(ledger) || 0;
  const total = Math.max(0, quizzes + courses + problems + streak + adjustments);
  return { total, quizzes, courses, problems, streak, adjustments };
}

// ─── Levels ───

/** Total XP needed to reach `level` (1-based): 0, 100, 250, 450, 700, 1000, 1350, ... */
export const levelThreshold = (level) => (level <= 1 ? 0 : 25 * (level - 1) * (level + 2));

/**
 * @returns {{ level, nameKey, xp, levelStart, nextLevelAt, xpIntoLevel, xpForLevel, progress }}
 * nameKey is a locale key: progress.levelNames.<1..10> (levels above 10 reuse the last name).
 */
export function getLevelInfo(xp) {
  const total = Math.max(0, Math.floor(Number(xp) || 0));
  let level = 1;
  while (total >= levelThreshold(level + 1)) level++;
  const levelStart = levelThreshold(level);
  const nextLevelAt = levelThreshold(level + 1);
  const xpForLevel = nextLevelAt - levelStart;
  const xpIntoLevel = total - levelStart;
  return {
    level,
    nameKey: `progress.levelNames.${Math.min(level, LEVEL_NAME_COUNT)}`,
    xp: total,
    levelStart,
    nextLevelAt,
    xpIntoLevel,
    xpForLevel,
    progress: xpForLevel > 0 ? Math.min(1, xpIntoLevel / xpForLevel) : 1,
  };
}

// ─── Mastery ───

/** Topic key of a quiz set: its id without the difficulty suffix ("arith-easy" → "arith"). */
export const topicKey = (quizId) => String(quizId || '').replace(/-(easy|medium|hard)$/, '');

const bestPercentages = (stats) => {
  const best = {};
  for (const q of stats?.completedQuizzes || []) {
    const pct = typeof q.percentage === 'number'
      ? q.percentage
      : q.total > 0 ? Math.round((q.score / q.total) * 100) : 0;
    if (best[q.quizId] === undefined || pct > best[q.quizId]) best[q.quizId] = pct;
  }
  return best;
};

/**
 * Mastery per topic: difficulty-weighted average of the best score of every quiz in the topic
 * (quizzes never taken count as 0%). Only recorded attempts count — "practise mistakes" never does.
 * @returns {Array<{ key, category, icon, color, mastery, attempted, quizCount }>} in quizSets order
 */
export function computeMastery(stats, quizSets = []) {
  const best = bestPercentages(stats);
  const topics = new Map();
  for (const set of quizSets) {
    const key = topicKey(set.id);
    if (!topics.has(key)) {
      topics.set(key, { key, category: set.category, icon: set.icon, color: set.color, weighted: 0, weight: 0, attempted: 0, quizCount: 0 });
    }
    const topic = topics.get(key);
    const w = DIFFICULTY_WEIGHT[set.difficulty] || 1;
    topic.weight += w;
    topic.quizCount++;
    if (best[set.id] !== undefined) {
      topic.weighted += w * best[set.id];
      topic.attempted++;
    }
  }
  return [...topics.values()].map(({ weighted, weight, ...rest }) => ({
    ...rest,
    mastery: weight > 0 ? Math.round(weighted / weight) : 0,
  }));
}

// ─── Local XP ledger (per user) ───

export const XP_LEDGER_KEY = '@mathhelper_xp_ledger';
const listeners = new Set();
const cache = {};

const ledgerKey = (userId) => getUserScopedKey(XP_LEDGER_KEY, userId);

export async function loadXpLedger(userId) {
  try {
    const raw = await AsyncStorage.getItem(ledgerKey(userId));
    const value = Number(JSON.parse(raw || '0')) || 0;
    cache[ledgerKey(userId)] = value;
    return value;
  } catch {
    return cache[ledgerKey(userId)] || 0;
  }
}

/** Add `delta` XP (may be negative) to the user's local ledger. Never throws. */
export async function addXpLedger(userId, delta) {
  const d = Math.round(Number(delta) || 0);
  if (!d) return loadXpLedger(userId);
  const current = await loadXpLedger(userId);
  const next = current + d;
  cache[ledgerKey(userId)] = next;
  try {
    await AsyncStorage.setItem(ledgerKey(userId), JSON.stringify(next));
  } catch (e) {
    console.warn('[progress] Failed to save XP ledger:', e?.message);
  }
  listeners.forEach((fn) => fn(ledgerKey(userId), next));
  return next;
}

/**
 * XP, level and (optionally) mastery for the current user.
 * @param stats    StatsContext stats
 * @param userId   current user id
 * @param quizSets localized quiz sets (pass to get mastery)
 */
export function useProgress(stats, userId, quizSets) {
  const key = ledgerKey(userId);
  const [ledger, setLedger] = useState(cache[key] || 0);

  useEffect(() => {
    let active = true;
    loadXpLedger(userId).then((v) => { if (active) setLedger(v); });
    const onChange = (changedKey, value) => { if (changedKey === key) setLedger(value); };
    listeners.add(onChange);
    return () => { active = false; listeners.delete(onChange); };
  }, [key, userId]);

  const xp = useMemo(() => computeXp(stats, ledger), [stats, ledger]);
  const level = useMemo(() => getLevelInfo(xp.total), [xp.total]);
  const mastery = useMemo(() => (quizSets ? computeMastery(stats, quizSets) : []), [stats, quizSets]);
  const addXp = useCallback((delta) => addXpLedger(userId, delta), [userId]);

  return { xp, level, mastery, ledger, addXp };
}
