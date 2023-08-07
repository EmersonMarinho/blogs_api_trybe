const isEmailFormatValid = (req, res, next) => {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/;
    if (!email || !regex.test(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

module.exports = isEmailFormatValid;