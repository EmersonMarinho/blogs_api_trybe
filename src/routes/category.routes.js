const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const { checkTokenExists, verifyToken } = require('../middlewares/authMiddleware');

router.post('/categories', checkTokenExists, verifyToken, categoryController.createCategory);

router.get('/categories', checkTokenExists, verifyToken, categoryController.getAllCategories);

module.exports = router;
