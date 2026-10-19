function errorHandler(err, req, res, _next) {
  console.error('Error:', err.message);
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  const statusCode = err.statusCode || err.status || 500;
  // body-parser messages can quote the submitted body; return fixed messages instead
  const parserMessages = { 'entity.parse.failed': 'Invalid JSON body', 'entity.too.large': 'Request body too large' };
  res.status(statusCode).json({
    error: statusCode >= 500 ? 'Internal server error' : (parserMessages[err.type] || err.message),
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}

module.exports = errorHandler;
