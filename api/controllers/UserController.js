const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const mime = require('mime-types');
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
                // res.json(user);
                res.cookie('token', token).json(user)
            });
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Logout User
const logoutUser = (req, res) => {
    res.cookie('token', '').json(true);
}

// Get user profile
const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
}


// Exports
module.exports = { registerUser, loginUser, logoutUser, getProfile }