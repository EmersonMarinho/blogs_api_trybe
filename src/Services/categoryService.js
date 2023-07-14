const { Category } = require('../models');

const createCategory = async (category) => {
    if (!category.name) {
        return { message: '"name" is required' };
    }
    const newCategory = await Category.create({ ...category });
    return newCategory;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = { createCategory, getAllCategories };