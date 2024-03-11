const Booking = require('../models/BookingModel');
const jwt = require('jsonwebtoken');


// Getting User Infromation
function getUserDataFromReq(req) {
    return new Promise((resolve, reject) => {
        jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            resolve(userData);
        });
    });
}

// Get Bookings
const getBookings = async (req, res) => {
    const userData = await getUserDataFromReq(req);
    res.json(await Booking.find({ user: userData.id }).populate('place'));
}


// Add new Bookings
const postBookings = async (req, res) => {
    const userData = await getUserDataFromReq(req);
    const {
        place, checkIn, checkOut, numberOfGuests, name, phone, price,
    } = req.body;
    Booking.create({
        place, checkIn, checkOut, numberOfGuests, name, phone, price,
        user: userData.id,
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        throw err;
    });
}

module.exports = { getBookings, postBookings }