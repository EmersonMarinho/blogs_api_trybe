const jwt = require('jsonwebtoken');
const { User } = require('../models');

const isValidEmail = async (email) => {
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return { message: '"email" must be a valid email', status: 400 };
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return { message: 'User already registered', status: 409 };
    }
    return null;
};

const createUser = async ({ displayName, email, password, image }) => {
    const emailError = await isValidEmail(email);
    if (emailError) return emailError;

    const newUser = await User.create({ displayName, email, password, image });
    const payload = { id: newUser.id, displayName, email, image };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256' });

    return { token, status: 201 };
};

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    console.log(user);
    return user;
};

module.exports = { createUser, getAllUsers, getUserById };