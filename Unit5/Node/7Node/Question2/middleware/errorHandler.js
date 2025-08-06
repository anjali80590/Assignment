module.exports = (err, req, res, next) => {
  console.error(err.stack);
  const status = err.name === "ValidationError" ? 400 : 500;
  res.status(status).json({ error: err.message });
};
