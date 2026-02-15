const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const savedItemsRoutes = require('./routes/savedItems');
const statsRoutes = require('./routes/stats');
const analyzeRoutes = require('./routes/analyze');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/saved-items', savedItemsRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/analyze', analyzeRoutes);

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;
