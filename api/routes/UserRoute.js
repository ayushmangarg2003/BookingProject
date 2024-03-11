// Imports
const express = require('express');
const { registerUser, loginUser, logoutUser, getProfile } = require('../controllers/UserController');

// Router Setup
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/profile', getProfile);


module.exports = router;