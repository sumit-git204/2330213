// Simple token-based auth middleware
// Replace with JWT verification in production

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // TODO: verify JWT token here
  // For now, just check token is present
  req.user = { token };
  next();
};

module.exports = { authenticate };
