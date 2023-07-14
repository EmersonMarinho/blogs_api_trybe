const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', UserController.createUser);
router.get(
'/', 
authMiddleware.checkTokenExists,
authMiddleware.verifyToken, 
authMiddleware.checkTokenFormat,
UserController.getAllUsers,
);

module.exports = router;
