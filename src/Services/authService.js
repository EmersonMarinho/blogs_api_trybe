const jwt = require('jsonwebtoken');
const { User } = require('../models');

const signIn = async ({ email, password }) => {
  if (!email || !password) {
    return { message: 'Some required fields are missing', status: 400 };
  }

  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { message: 'Invalid fields', status: 400 };
  }
  
  const { id, displayName, image } = user;
  const payload = { id, email, displayName, image };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256' });

  return { token, status: 200 };
};

module.exports = { signIn };
