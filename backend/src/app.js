const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const savedItemsRoutes = require('./routes/savedItems');
const statsRoutes = require('./routes/stats');
const analyzeRoutes = require('./routes/analyze');
const purchaseRoutes = require('./routes/purchases');

const app = express();

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// Landing page
app.get('/', (req, res) => {
  res.send(getLandingPageHtml());
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/saved-items', savedItemsRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/analyze', analyzeRoutes);
app.use('/api/purchases', purchaseRoutes);

// Error handler (must be last)
app.use(errorHandler);

function getLandingPageHtml() {
  return `<!DOCTYPE html>
<html lang="sq">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MathHelper — Asistenti yt personal i matematikës</title>
<meta name="description" content="MathHelper - Aplikacioni mobil për mësimin e matematikës. Analizo probleme me kamerë, kurse të plota, dhe kuize interaktive.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a12;
  --surface:#12121e;
  --surface-alt:#1a1a2e;
  --text:#e8e6f0;
  --text-dim:#8b87a0;
  --accent:#8b5cf6;
  --accent-warm:#c084fc;
  --accent-blue:#60a5fa;
  --gradient:linear-gradient(135deg,#667eea 0%,#8b5cf6 40%,#a855f7 70%,#764ba2 100%);
  --font-display:'DM Serif Display',Georgia,serif;
  --font-body:'Plus Jakarta Sans',-apple-system,sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--font-body);overflow-x:hidden;-webkit-font-smoothing:antialiased}

/* Noise texture overlay */
body::before{
  content:'';position:fixed;inset:0;z-index:9999;pointer-events:none;
  opacity:.035;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Grid background */
.grid-bg{
  position:fixed;inset:0;z-index:0;
  background-image:
    linear-gradient(rgba(139,92,246,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(139,92,246,.04) 1px,transparent 1px);
  background-size:60px 60px;
}

/* Floating math symbols */
.math-float{
  position:fixed;z-index:0;font-size:clamp(1.5rem,4vw,3rem);opacity:.06;
  color:var(--accent);pointer-events:none;
  animation:drift 20s ease-in-out infinite;
}
.math-float:nth-child(2){top:15%;left:8%;animation-delay:-4s;font-size:2rem}
.math-float:nth-child(3){top:40%;right:5%;animation-delay:-8s;font-size:2.5rem}
.math-float:nth-child(4){top:65%;left:3%;animation-delay:-12s}
.math-float:nth-child(5){top:80%;right:10%;animation-delay:-16s;font-size:1.8rem}
.math-float:nth-child(6){top:25%;right:15%;animation-delay:-6s;font-size:2.2rem}
@keyframes drift{
  0%,100%{transform:translateY(0) rotate(0deg)}
  25%{transform:translateY(-20px) rotate(5deg)}
  75%{transform:translateY(15px) rotate(-3deg)}
}

.container{max-width:1100px;margin:0 auto;padding:0 24px;position:relative;z-index:1}

/* NAV */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  padding:20px 0;
  background:rgba(10,10,18,.6);
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(139,92,246,.08);
  transition:all .3s ease;
}
nav .container{display:flex;align-items:center;justify-content:space-between}
.nav-logo{
  font-family:var(--font-display);font-size:1.5rem;color:var(--text);
  text-decoration:none;letter-spacing:-.01em;
}
.nav-logo span{
  background:var(--gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;
}
.nav-links{display:flex;gap:32px;align-items:center}
.nav-links a{
  color:var(--text-dim);text-decoration:none;font-size:.875rem;font-weight:500;
  transition:color .2s;
}
.nav-links a:hover{color:var(--text)}

/* HERO */
.hero{
  min-height:100vh;display:flex;align-items:center;
  padding:120px 0 80px;position:relative;
}
.hero-content{max-width:680px}
.hero-badge{
  display:inline-flex;align-items:center;gap:8px;
  padding:8px 16px;border-radius:100px;
  background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);
  font-size:.8rem;font-weight:600;color:var(--accent-warm);
  margin-bottom:32px;
  animation:fadeUp .8s ease both;
}
.hero-badge::before{
  content:'';width:6px;height:6px;border-radius:50%;
  background:var(--accent-warm);
  animation:pulse 2s ease-in-out infinite;
}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.hero h1{
  font-family:var(--font-display);
  font-size:clamp(2.8rem,6vw,4.5rem);line-height:1.08;
  letter-spacing:-.02em;margin-bottom:24px;
  animation:fadeUp .8s ease .1s both;
}
.hero h1 em{
  font-style:normal;
  background:var(--gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;
}
.hero p{
  font-size:clamp(1rem,2vw,1.2rem);line-height:1.7;
  color:var(--text-dim);max-width:520px;margin-bottom:40px;
  animation:fadeUp .8s ease .2s both;
}
.hero-actions{
  display:flex;gap:16px;flex-wrap:wrap;
  animation:fadeUp .8s ease .3s both;
}
.btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:14px 28px;border-radius:12px;
  font-family:var(--font-body);font-size:.95rem;font-weight:600;
  text-decoration:none;cursor:pointer;border:none;
  transition:all .25s ease;
}
.btn-primary{
  background:var(--gradient);color:#fff;
  box-shadow:0 4px 24px rgba(139,92,246,.3);
}
.btn-primary:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 32px rgba(139,92,246,.4);
}
.btn-ghost{
  background:rgba(139,92,246,.08);color:var(--accent-warm);
  border:1px solid rgba(139,92,246,.2);
}
.btn-ghost:hover{background:rgba(139,92,246,.15)}

/* Glow orb behind hero */
.hero-glow{
  position:absolute;right:-100px;top:50%;transform:translateY(-50%);
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(139,92,246,.12) 0%,rgba(102,126,234,.06) 40%,transparent 70%);
  filter:blur(60px);pointer-events:none;
  animation:glowPulse 6s ease-in-out infinite;
}
@keyframes glowPulse{
  0%,100%{opacity:.7;transform:translateY(-50%) scale(1)}
  50%{opacity:1;transform:translateY(-50%) scale(1.1)}
}

/* Phone mockup */
.hero-visual{
  position:absolute;right:0;top:50%;transform:translateY(-50%);
  width:280px;height:560px;border-radius:40px;
  background:var(--surface);border:2px solid rgba(139,92,246,.15);
  overflow:hidden;
  box-shadow:0 40px 80px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.05);
  animation:fadeUp 1s ease .4s both;
}
.phone-screen{
  padding:48px 20px 20px;height:100%;
  background:linear-gradient(180deg,#12121e 0%,#1a1a2e 100%);
  display:flex;flex-direction:column;gap:16px;
}
.phone-bar{
  display:flex;align-items:center;gap:8px;margin-bottom:8px;
}
.phone-bar-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);opacity:.6}
.phone-bar-text{font-size:.7rem;color:var(--text-dim);font-weight:600}
.phone-card{
  padding:16px;border-radius:14px;
  background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.1);
}
.phone-card-icon{font-size:1.5rem;margin-bottom:8px}
.phone-card-title{font-size:.75rem;font-weight:700;color:var(--text);margin-bottom:4px}
.phone-card-sub{font-size:.65rem;color:var(--text-dim)}
.phone-eq{
  text-align:center;padding:20px;font-size:1.4rem;font-weight:700;
  background:var(--gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;letter-spacing:1px;
}

@keyframes fadeUp{
  from{opacity:0;transform:translateY(30px)}
  to{opacity:1;transform:translateY(0)}
}

/* FEATURES */
.features{padding:120px 0;position:relative}
.section-label{
  font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;
  color:var(--accent);margin-bottom:16px;
}
.section-title{
  font-family:var(--font-display);font-size:clamp(2rem,4vw,3rem);
  line-height:1.15;letter-spacing:-.01em;margin-bottom:64px;max-width:500px;
}
.features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.feature-card{
  padding:36px 28px;border-radius:20px;
  background:var(--surface);
  border:1px solid rgba(139,92,246,.06);
  transition:all .35s ease;position:relative;overflow:hidden;
}
.feature-card::before{
  content:'';position:absolute;inset:0;opacity:0;
  background:linear-gradient(135deg,rgba(139,92,246,.06),rgba(96,165,250,.04));
  transition:opacity .35s ease;
}
.feature-card:hover{
  border-color:rgba(139,92,246,.15);
  transform:translateY(-4px);
  box-shadow:0 20px 60px rgba(0,0,0,.2);
}
.feature-card:hover::before{opacity:1}
.feature-card>*{position:relative;z-index:1}
.feature-icon{
  width:56px;height:56px;border-radius:16px;
  display:flex;align-items:center;justify-content:center;
  font-size:1.6rem;margin-bottom:24px;
  background:rgba(139,92,246,.08);
  border:1px solid rgba(139,92,246,.1);
}
.feature-card h3{font-size:1.1rem;font-weight:700;margin-bottom:10px;letter-spacing:-.01em}
.feature-card p{font-size:.9rem;color:var(--text-dim);line-height:1.65}

/* STATS */
.stats{padding:80px 0;border-top:1px solid rgba(139,92,246,.06);border-bottom:1px solid rgba(139,92,246,.06)}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;text-align:center}
.stat-num{
  font-family:var(--font-display);font-size:clamp(2rem,4vw,3.2rem);
  background:var(--gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;margin-bottom:8px;
}
.stat-label{font-size:.85rem;color:var(--text-dim);font-weight:500}

/* CTA */
.cta{padding:120px 0;text-align:center}
.cta-box{
  padding:64px 48px;border-radius:28px;position:relative;overflow:hidden;
  background:var(--surface);border:1px solid rgba(139,92,246,.1);
}
.cta-box::before{
  content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;
  background:conic-gradient(from 180deg,transparent,rgba(139,92,246,.06),transparent 30%);
  animation:ctaRotate 12s linear infinite;
}
@keyframes ctaRotate{to{transform:rotate(360deg)}}
.cta-box>*{position:relative;z-index:1}
.cta-box h2{
  font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,2.8rem);
  margin-bottom:16px;letter-spacing:-.01em;
}
.cta-box p{color:var(--text-dim);font-size:1.05rem;max-width:460px;margin:0 auto 36px;line-height:1.7}
.cta-stores{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.store-btn{
  display:flex;align-items:center;gap:12px;
  padding:14px 24px;border-radius:14px;
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
  color:var(--text);text-decoration:none;
  transition:all .25s;
}
.store-btn:hover{background:rgba(139,92,246,.1);border-color:rgba(139,92,246,.25)}
.store-btn svg{width:24px;height:24px;fill:currentColor}
.store-btn-text{text-align:left}
.store-btn-text small{font-size:.65rem;color:var(--text-dim);display:block}
.store-btn-text strong{font-size:.9rem}

/* FOOTER */
footer{
  padding:40px 0;text-align:center;
  border-top:1px solid rgba(139,92,246,.06);
}
footer p{font-size:.8rem;color:var(--text-dim)}
footer a{color:var(--accent-warm);text-decoration:none}

/* RESPONSIVE */
@media(max-width:900px){
  .hero-visual,.hero-glow{display:none}
  .features-grid{grid-template-columns:1fr}
  .stats-grid{grid-template-columns:1fr;gap:32px}
  .nav-links{display:none}
  .hero h1{font-size:2.6rem}
}
@media(min-width:901px) and (max-width:1100px){
  .hero-visual{width:220px;height:440px;right:-20px}
  .features-grid{grid-template-columns:repeat(2,1fr)}
}
</style>
</head>
<body>

<div class="grid-bg"></div>
<div class="math-float" style="top:10%;left:5%">∑</div>
<div class="math-float">∫</div>
<div class="math-float">π</div>
<div class="math-float">∞</div>
<div class="math-float">√</div>
<div class="math-float">Δ</div>

<nav>
  <div class="container">
    <a href="#" class="nav-logo"><span>Math</span>Helper</a>
    <div class="nav-links">
      <a href="#features">Veçoritë</a>
      <a href="#stats">Statistikat</a>
      <a href="#download" class="btn btn-primary" style="padding:10px 20px;font-size:.85rem">Shkarko</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge">Së shpejti në App Store & Play Store</div>
      <h1>Matematika, <em>e thjeshtë</em> për ty.</h1>
      <p>Fotografo çdo problem matematikor dhe merr zgjidhjen hap pas hapi. Mëso me kurse interaktive dhe testo njohuritë me kuize argëtuese.</p>
      <div class="hero-actions">
        <a href="#download" class="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Shkarko Tani
        </a>
        <a href="#features" class="btn btn-ghost">Mëso më shumë</a>
      </div>
    </div>
    <div class="hero-glow"></div>
    <div class="hero-visual">
      <div class="phone-screen">
        <div class="phone-bar">
          <div class="phone-bar-dot"></div>
          <div class="phone-bar-text">MathHelper</div>
        </div>
        <div class="phone-eq">2x² + 5x − 3 = 0</div>
        <div class="phone-card">
          <div class="phone-card-icon">📸</div>
          <div class="phone-card-title">Zgjidhje e menjëhershme</div>
          <div class="phone-card-sub">Fotografo dhe merr përgjigjen</div>
        </div>
        <div class="phone-card">
          <div class="phone-card-icon">📊</div>
          <div class="phone-card-title">Hap pas hapi</div>
          <div class="phone-card-sub">Shpjegim i detajuar</div>
        </div>
        <div class="phone-card">
          <div class="phone-card-icon">🎯</div>
          <div class="phone-card-title">Kuize ditore</div>
          <div class="phone-card-sub">Testo veten çdo ditë</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="features" id="features">
  <div class="container">
    <div class="section-label">Veçoritë kryesore</div>
    <h2 class="section-title">Gjithçka që të nevojitet për të mësuar matematikën.</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">📸</div>
        <h3>Analizo me kamerë</h3>
        <p>Fotografo çdo problem matematikor dhe merr zgjidhjen e plotë hap pas hapi, në sekonda.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h3>Kurse të plota</h3>
        <p>Nga aritmetika bazë deri tek algjebra e avancuar — mëso me kurse të strukturuara në shqip.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Kuize interaktive</h3>
        <p>Testo njohuritë e tua me kuize të ndryshme dhe ndiq progresin tënd me statistika.</p>
      </div>
    </div>
  </div>
</section>

<section class="stats" id="stats">
  <div class="container">
    <div class="stats-grid">
      <div>
        <div class="stat-num">50+</div>
        <div class="stat-label">Kurse matematike</div>
      </div>
      <div>
        <div class="stat-num">500+</div>
        <div class="stat-label">Pyetje kuizi</div>
      </div>
      <div>
        <div class="stat-num">100%</div>
        <div class="stat-label">Në gjuhën shqipe</div>
      </div>
    </div>
  </div>
</section>

<section class="cta" id="download">
  <div class="container">
    <div class="cta-box">
      <h2>Gati për të filluar?</h2>
      <p>Shkarko MathHelper falas dhe fillo të mësosh matematikën në mënyrën më të lehtë.</p>
      <div class="cta-stores">
        <a href="#" class="store-btn">
          <svg viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          <div class="store-btn-text">
            <small>Së shpejti në</small>
            <strong>App Store</strong>
          </div>
        </a>
        <a href="#" class="store-btn">
          <svg viewBox="0 0 24 24"><path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.61-.92zm.98-.854l11.545 6.523L13.7 9.92 4.59.96zM16.135 7.483L19.5 9.38a1 1 0 010 1.74l-3.365 1.897L13.7 10.58l2.435-3.097zm0 9.034l2.435-2.437-3.365 1.897a1 1 0 000 1.74l3.365 1.897-2.435-2.437.002-.66z"/></svg>
          <div class="store-btn-text">
            <small>Merr në</small>
            <strong>Google Play</strong>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <p>&copy; ${new Date().getFullYear()} MathHelper. Të gjitha të drejtat të rezervuara.</p>
  </div>
</footer>

<script>
document.addEventListener('DOMContentLoaded',()=>{
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.style.animation='fadeUp .7s ease forwards';obs.unobserve(e.target)}})
  },{threshold:.15});
  document.querySelectorAll('.feature-card,.stat-num,.cta-box').forEach(el=>{
    el.style.opacity='0';el.style.transform='translateY(30px)';obs.observe(el);
  });
  const nav=document.querySelector('nav');
  window.addEventListener('scroll',()=>{nav.style.padding=window.scrollY>60?'12px 0':'20px 0'});
});
</script>
</body>
</html>`;
}

module.exports = app;
