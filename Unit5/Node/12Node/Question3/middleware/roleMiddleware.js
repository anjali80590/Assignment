module.exports = (roles = []) => {
  // roles: string or array of allowed roles (e.g., "admin" or ["admin","user"])
  if (typeof roles === "string") roles = [roles];
  return (req, res, next) => {
    if (!req.user)
      return res.status(401).json({ message: "Not authenticated" });
    if (roles.length && !roles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  };
};
