const express = require('express');
const { getBookings, postBookings } = require('../controllers/BookingController.js');
const router = express.Router();


// Get Bookings
router.get('/', getBookings)

// Add Bookings
router.post('/', postBookings)

module.exports = router;