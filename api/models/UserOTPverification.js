const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserOTPverificationSchema = new Schema({
  userId: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});


const UserOTPverification = mongoose.model('UserOTPverification', UserOTPverificationSchema);


module.exports = UserOTPverification;