const TestDrive = require('../models/TestDrive');

exports.bookTestDrive = async (req, res) => {
  try {
    const testDrive = new TestDrive(req.body);
    await testDrive.save();
    res.status(201).json({ message: "Test drive booked successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
