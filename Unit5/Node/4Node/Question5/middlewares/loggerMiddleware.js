function loggerMiddleware(req, res, next) {
  const now = new Date().toISOString().replace("T", " ").split(".")[0];
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
}

module.exports = loggerMiddleware;
