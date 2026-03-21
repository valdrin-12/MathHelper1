const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const savedItemsRoutes = require('./routes/savedItems');
const statsRoutes = require('./routes/stats');
const analyzeRoutes = require('./routes/analyze');
const purchaseRoutes = require('./routes/purchases');

const purchaseController = require('./controllers/purchaseController');

const app = express();

// Paysera callback needs urlencoded body BEFORE json parsing
app.post('/api/purchases/paysera-callback',
  express.urlencoded({ extended: true }),
  purchaseController.payseraCallback
);

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
const ALLOWED_ORIGINS = [
  'https://mathhelper.online',
  'https://www.mathhelper.online',
  'https://mathhelper1-4zct.onrender.com',
  // Allow localhost during development
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:8081', 'http://localhost:3000', 'http://localhost:19006'] : []),
];
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, curl)
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/saved-items', savedItemsRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/analyze', analyzeRoutes);
app.use('/api/purchases', purchaseRoutes);

// Landing page (About)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'about.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'about.html'));
});

// QR Code printable sticker page
app.get('/qr', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'qr.html'));
});

// Privacy Policy page
app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'privacy.html'));
});

// Paysera payment success page
app.get('/premium/success', (req, res) => {
  const appUrl = process.env.APP_URL || 'https://mathhelper.online';
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MathHelper - Payment Successful</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
    .card { background: #FFFFFF; border-radius: 24px; padding: 48px; max-width: 440px; width: 90%; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .icon { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #F59E0B, #D97706); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 40px; }
    h1 { font-size: 28px; font-weight: 800; color: #0F172A; margin-bottom: 12px; }
    p { font-size: 16px; color: #64748B; margin-bottom: 8px; line-height: 1.5; }
    .status { font-size: 14px; color: #94A3B8; margin: 20px 0; }
    .spinner { display: inline-block; width: 20px; height: 20px; border: 3px solid #E2E8F0; border-top-color: #F59E0B; border-radius: 50%; animation: spin 0.8s linear infinite; vertical-align: middle; margin-right: 8px; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .btn { display: inline-block; background: linear-gradient(135deg, #F59E0B, #D97706); color: #FFF; font-size: 16px; font-weight: 700; padding: 14px 32px; border-radius: 14px; text-decoration: none; margin-top: 16px; transition: transform 0.2s; }
    .btn:hover { transform: scale(1.03); }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">⭐</div>
    <h1 id="title">Processing Payment...</h1>
    <p id="desc">Please wait while we confirm your purchase.</p>
    <div class="status" id="status"><span class="spinner"></span>Verifying...</div>
    <a href="${appUrl}/dashboard" class="btn hidden" id="btn">Open MathHelper</a>
  </div>
  <script>
    const orderId = new URLSearchParams(window.location.search).get('orderid');
    const token = localStorage.getItem('@math_helper_access_token');

    async function checkPayment() {
      if (!orderId) {
        document.getElementById('title').textContent = 'Payment Successful!';
        document.getElementById('desc').textContent = 'You are now a Premium member.';
        document.getElementById('status').classList.add('hidden');
        document.getElementById('btn').classList.remove('hidden');
        return;
      }

      try {
        const res = await fetch('/api/purchases/check-payment?orderid=' + orderId, {
          headers: token ? { 'Authorization': 'Bearer ' + token } : {}
        });
        const data = await res.json();

        if (data.paid) {
          document.getElementById('title').textContent = 'Payment Successful!';
          document.getElementById('desc').textContent = 'Welcome to MathHelper Premium! Enjoy 15 analyses/day and all courses & quizzes.';
          document.getElementById('status').textContent = 'Redirecting...';
          document.getElementById('btn').classList.remove('hidden');
          setTimeout(() => { window.location.href = '${appUrl}/dashboard'; }, 2500);
        } else {
          document.getElementById('title').textContent = 'Payment Pending';
          document.getElementById('desc').textContent = 'Your payment is still being processed. Please wait a moment.';
          setTimeout(checkPayment, 3000);
        }
      } catch (e) {
        document.getElementById('title').textContent = 'Payment Received!';
        document.getElementById('desc').textContent = 'You can now access all Premium features.';
        document.getElementById('status').classList.add('hidden');
        document.getElementById('btn').classList.remove('hidden');
      }
    }

    checkPayment();
  </script>
</body>
</html>`);
});

// Screenshots static files
app.use('/screenshots', express.static(path.join(__dirname, '..', 'pages', 'screenshots')));

// Graph rendering endpoint — serves self-contained HTML with function-plot
app.get('/graph', (req, res) => {
  const rawExpr = (req.query.expr || '').slice(0, 500);
  // Basic sanitization: only allow safe math characters
  const expr = rawExpr.replace(/[^0-9x+\-*/^().sincotaqrple, ]/gi, '');
  if (!expr) return res.status(400).send('Missing expr');

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/function-plot@1.22.2/dist/function-plot.js"></script>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{width:100%;height:100%;background:#FDF6EC;overflow:hidden}
    #plot{width:100%;height:calc(100% - 52px)}
    #legend{height:52px;display:flex;align-items:center;justify-content:center;
      font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:17px;
      font-weight:600;font-style:italic;color:#6C47FF;
      border-top:1px solid #E8D5B0;background:#FDF6EC}
    #err{display:none;padding:24px;color:#8B6914;font-family:sans-serif;font-size:14px;text-align:center}
  </style>
</head>
<body>
<div id="plot"></div>
<div id="err"></div>
<div id="legend">y = ${expr.replace(/\*/g, '·')}</div>
<script>
(function(){
  var expr = ${JSON.stringify(expr)};
  try {
    var fn = new Function('x','with(Math){return ('+expr+')}');
    var yMin=Infinity,yMax=-Infinity;
    for(var xi=-10;xi<=10;xi+=0.2){
      var y=fn(xi);
      if(isFinite(y)){yMin=Math.min(yMin,y);yMax=Math.max(yMax,y);}
    }
    var pad=Math.max((yMax-yMin)*0.2,1);
    functionPlot({
      target:'#plot',
      width:window.innerWidth,
      height:window.innerHeight-52,
      xAxis:{domain:[-10,10]},
      yAxis:{domain:[yMin-pad,yMax+pad]},
      grid:true,
      data:[{fn:expr,color:'#6C47FF',graphType:'polyline'}]
    });
    var svg=document.querySelector('#plot svg');
    if(svg)svg.style.background='#FDF6EC';
  } catch(e) {
    document.getElementById('plot').style.display='none';
    var el=document.getElementById('err');
    el.style.display='block';
    el.textContent='Gabim: '+e.message;
  }
})();
</script>
</body>
</html>`);
});

// Serve Expo web build assets
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// App route + SPA fallback for non-API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;
