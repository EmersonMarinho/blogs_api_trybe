const userService = require('../Services/userService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const response = await userService.createUser({ displayName, email, password, image });
    if (response.status !== 201) {
        return res.status(response.status).json({ message: response.message });
    }
    res.status(response.status).json(response);
};

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(user);
};

module.exports = { createUser, getAllUsers, getUserById };
