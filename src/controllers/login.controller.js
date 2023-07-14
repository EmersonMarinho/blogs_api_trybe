const authService = require('../Services/authService');

const signIn = async (req, res) => {
    const { email, password } = req.body;
    const response = await authService.signIn({ email, password });
    if (response.status !== 200) {
        return res.status(response.status).json({ message: response.message });
    }
    res.status(response.status).json(response);
};

module.exports = { signIn };