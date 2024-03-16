const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.JWT_SECRET
// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.register(name, email, password)
        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        if (user) {
            jwt.sign({
                email: user.email,
                id: user._id
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.json({user:email, token})
            });
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// Get user profile
const getProfile = async (req, res) => {
    const { name, email, _id } = await User.findById(userData.id);
    if (name || email) {
        res.json({ name, email, _id });
    } else {
        res.json(null);
    }
}


// Exports
module.exports = { registerUser, loginUser, getProfile }