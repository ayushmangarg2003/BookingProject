const Booking = require('../models/BookingModel');

// Get Bookings
const getBookings = async (req, res) => {
    res.json(await Booking.find());
}


// Add new Bookings
const postBookings = async (req, res) => {
    const { user } = req.body
    const {
        place, checkIn, checkOut, numberOfGuests, name, phone, price,
    } = req.body;
    Booking.create({
        place, checkIn, checkOut, numberOfGuests, name, phone, price,
        user: user,
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        throw err;
    });
}

module.exports = { getBookings, postBookings }