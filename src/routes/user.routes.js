const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const { checkTokenExists, verifyToken } = require('../middlewares/authMiddleware');

router.post('/', UserController.createUser);

router.get('/user', checkTokenExists, verifyToken, UserController.getAllUsers);

router.get('/user/:id', checkTokenExists, verifyToken, UserController.getUserById);

module.exports = router;
