const express = require('express');
const { getCarDetails } = require('../controllers/carController');

const router = express.Router();
const { getCarInfo } = require('../controllers/carController'); 

// Route to get car details by ID
router.get('/:carId', getCarDetails);
router.get('/car-info/:carId', getCarInfo);

module.exports = router;
