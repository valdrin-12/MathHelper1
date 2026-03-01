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

const app = express();

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(cors());
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

// Screenshots static files
app.use('/screenshots', express.static(path.join(__dirname, '..', 'pages', 'screenshots')));

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
