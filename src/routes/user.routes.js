const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const { checkTokenExists, verifyToken } = require('../middlewares/authMiddleware');
const validateDisplayName = require('../middlewares/validateDisplayName');
const isEmailFormatValid = require('../middlewares/isEmailFormatValid');
const validatePassword = require('../middlewares/validatePassword');

router.post(
'/user', 
validateDisplayName,
isEmailFormatValid,
validatePassword,
UserController.createUser,
);

router.get('/user', checkTokenExists, verifyToken, UserController.getAllUsers);

router.get('/user/:id', checkTokenExists, verifyToken, UserController.getUserById);

module.exports = router;
