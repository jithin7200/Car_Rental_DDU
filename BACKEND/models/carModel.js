const mongoose = require('mongoose')

const carModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
    required: true,
  },
  transmission: {
    type: String,
    enum: ["Manual", "Automatic"],
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  rentPerDay: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  available: {
    type: Boolean,
    default: true,
  },
  location: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
)

const car = mongoose.model('car', carModel)

module.exports = car;