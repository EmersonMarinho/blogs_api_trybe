const jwt = require('jsonwebtoken');

const checkTokenExists = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Token not found' });
    }
    next();
};

const checkTokenFormat = (req, res, next) => {
    const parts = req.headers.authorization.split(' ');

    if (parts.length !== 2) {
        return res.status(200).json({ message: 'Token malformatted' });
    }
    next();
};

const verifyToken = (req, res, next) => {
    const [, token] = req.headers.authorization.split(' ');

    try { 
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (_err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { checkTokenExists, checkTokenFormat, verifyToken };