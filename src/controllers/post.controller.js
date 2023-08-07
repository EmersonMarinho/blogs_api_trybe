const postService = require('../Services/PostService');

const getAllPosts = async (req, res) => {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
};

module.exports = { getAllPosts };