const jwt = require("jsonwebtoken");
const config = require("../../config/config");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    const decodeToken = jwt.decode(token.replace("Bearer ", ""));
    req.user = {
      userId: decodeToken.userId,
      email: decodeToken.email,
      role: decodeToken.role,
    };
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
