// Imports
const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/UserController');

// Router Setup
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/profile', getProfile);


module.exports = router;