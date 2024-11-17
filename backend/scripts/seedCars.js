const mongoose = require('mongoose');
const Car = require('../models/carModel');

mongoose.connect('mongodb://localhost:27017/auto-avenue', { useNewUrlParser: true, useUnifiedTopology: true });

const seedCars = async () => {
  const cars = [
    {
      make: 'Toyota',
      model: 'Camry',
      versions: ['Base', 'SE', 'XLE'],
      brochureLink: 'https://www.youtube.com',
      imageUrl: '/assets/car.jpeg',
    },
    {
      make: 'Honda',
      model: 'Civic',
      versions: ['LX', 'EX', 'Sport'],
      brochureLink: 'https://www.youtube.com',
      imageUrl: '/assets/car1.jpeg',
    }
  ];

  await Car.insertMany(cars);
  console.log('Cars added to database');
  mongoose.connection.close();
};

seedCars().catch(err => console.error(err));
