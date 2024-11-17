const express = require('express');
const TestDrive = require('../models/TestDrive'); // Import TestDrive model
const router = express.Router();

// POST route for booking a test drive
router.post('/', async (req, res) => {
  const { fullName, phone, carMakeModel, version, testDriveDate, city, branch } = req.body;

  const newTestDrive = new TestDrive({
    fullName,
    phone,
    carMakeModel,
    version,
    testDriveDate,
    city,
    branch
  });

  try {
    await newTestDrive.save(); // Save to MongoDB
    res.status(201).json({ message: 'Test Drive booked successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to book test drive' });
  }
});

// PUT route for updating a test drive booking by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedBooking = await TestDrive.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking updated successfully!', booking: updatedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update booking' });
  }
});

// DELETE route for deleting a test drive booking by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await TestDrive.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete booking' });
  }
});

module.exports = router;
