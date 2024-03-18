const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
  user: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  numberOfGuests: { type: Number, required: true },
  price: Number,
});

bookingSchema.statics.book = async function (place, user, checkIn, numberOfGuests, checkOut, name, phone, price) {
  // if (!place || !user || !price) {
    // throw Error('All fields must be filled')
  // }
  if (!user) {
    throw Error('Register or Login')
  }
  if (!checkIn) {
    throw Error('Enter CheckIn Date')
  }
  if (!checkOut) {
    throw Error('Enter CheckOut Date')
  }
  if (!numberOfGuests) {
    throw Error('Enter Number of Guests')
  }
  if (!name) {
    throw Error('Enter Name')
  }
  if (!phone) {
    throw Error('Enter Phone Number')
  }
  
  const booking = await this.create({ place, checkIn, checkOut, numberOfGuests, name, phone, price, user: user })

  return booking
}

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;