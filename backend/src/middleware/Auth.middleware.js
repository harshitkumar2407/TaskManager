const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token; // or from headers

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