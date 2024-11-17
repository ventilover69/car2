const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  versions: [String],
  brochureLink: String,
  imageUrl: String,
  info: String,
  // Add any additional fields as needed
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
