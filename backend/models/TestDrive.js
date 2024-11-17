const mongoose = require('mongoose');

const testDriveSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  carMakeModel: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  testDriveDate: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  }
});

const TestDrive = mongoose.model('TestDrive', testDriveSchema);

module.exports = TestDrive;
