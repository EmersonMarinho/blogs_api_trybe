const jwt = require('jsonwebtoken');

const checkTokenExists = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Token not found' });
    }
    next();
};

const secret = (process.env.JWT_SECRET || 'secretJWT');

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;

    const authFDP = authorization.startsWith('Bearer') 
    ? authorization.split('Bearer ')[1] : authorization;

    try { 
        const payload = jwt.verify(authFDP, secret);
        req.user = payload;
        next();
    } catch (_err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { checkTokenExists, verifyToken };
