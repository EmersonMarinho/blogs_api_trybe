const categoryService = require('../Services/categoryService');

const createCategory = async (req, res) => {
    const { body } = req;

    const result = await categoryService.createCategory({ ...body });
    console.log(result);

    if (!result.name) {
        return res.status(400).json({ message: result.message });
    }

    return res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
};

module.exports = { createCategory, getAllCategories };