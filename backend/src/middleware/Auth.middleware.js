const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Try to get token from cookies first, then from Authorization header
    let token = req.cookies?.token;

    // debug: log incoming authorization header and cookie token (will appear in server logs)
    const authHeader = req.headers?.authorization;
    console.log("[AuthMiddleware] cookie token present:", !!req.cookies?.token);
    console.log(
      "[AuthMiddleware] authorization header:",
      authHeader ? "present" : "absent",
    );

    if (!token && authHeader) {
      // Extract token from "Bearer <token>" format
      const parts = authHeader.split(" ");
      if (parts.length === 2 && parts[0] === "Bearer") {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(401).json({ message: "No token, unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRETS);

    // 🔥 THIS LINE IS THE KEY
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
