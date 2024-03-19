// Imports
const express = require('express');
const { registerUser, loginUser, getProfile,verifyOTP } = require('../controllers/UserController.js');
// Router Setup
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/profile', getProfile);

router.post('/verifyOTP', verifyOTP)


module.exports = router;