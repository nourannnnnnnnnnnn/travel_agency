const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  amenities: [String], // Array of amenities
  availableDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;
