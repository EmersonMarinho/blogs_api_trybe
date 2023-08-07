const express = require('express');

const router = express.Router();

const { verifyToken, checkTokenExists } = require('../middlewares/authMiddleware');
const { getAllPosts } = require('../controllers/post.controller');

router.get('/post', checkTokenExists, verifyToken, getAllPosts);

module.exports = router;
