const Car = require("../models/carModel");

const getCarDetails = async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId);
    console.log(car);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    } else {
      res.json(car);
    }
  } catch (error) {
    console.log(error);
  }
};

const getCarInfo = async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId);
    if (!car) {
      return res.status(404).json({ message: 'Car info not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Export both getCarDetails and getCarInfo
module.exports = { getCarDetails, getCarInfo };
