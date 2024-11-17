const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  versions: [String],
  prices: [Number],
  brochureLink: String,
});

module.exports = mongoose.model('Car', carSchema);
