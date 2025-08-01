function roleCheckMiddleware(allowedRoles) {
  return (req, res, next) => {
    const role = req.header("x-role");
    if (!role)
      return res
        .status(401)
        .json({ error: "Role header (x-role) is required" });

    if (!allowedRoles.includes(role.toLowerCase())) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
}

module.exports = roleCheckMiddleware;
