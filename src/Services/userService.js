const jwt = require('jsonwebtoken');
const { User } = require('../models');

const isValidDisplayName = (displayName) => {
    if (displayName.length < 8) {
        return { message: '"displayName" length must be at least 8 characters long', status: 400 };
    }
    return null;
};

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

const isValidPassword = (password) => {
    if (password.length < 6) {
        return { message: '"password" length must be at least 6 characters long', status: 400 };
    }
    return null;
};

const createUser = async ({ displayName, email, password, image }) => {
    const error = isValidDisplayName(displayName) 
    || await isValidEmail(email) || isValidPassword(password);
    if (error) {
        return error;
    }
    
    const newUser = await User.create({ displayName, email, password, image });

    const payload = { id: newUser.id, displayName, email, image };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256' });

    return { token, status: 201 };
};

module.exports = { createUser };