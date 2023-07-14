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

module.exports = { createCategory };