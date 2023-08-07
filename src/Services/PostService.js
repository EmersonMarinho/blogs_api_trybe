const { BlogPost, User, Category } = require('../models');

const getPosts = async () => {
    const getAllPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    return getAllPosts;
};

module.exports = { getPosts };