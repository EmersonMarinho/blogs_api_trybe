const userService = require('../Services/userService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const response = await userService.createUser({ displayName, email, password, image });
    if (response.status !== 201) {
        return res.status(response.status).json({ message: response.message });
    }
    res.status(response.status).json(response);
};

module.exports = { createUser };
