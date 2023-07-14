const jwt = require('jsonwebtoken');

const checkTokenExists = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Token not found' });
    }
    next();
};

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    
    const token = authorization.slice(7);
    try {
      const secret = process.env.JWT_SECRET || 'secretJWT';
      const payload = jwt.verify(token, secret);
      req.user = payload;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };

module.exports = { checkTokenExists, verifyToken };