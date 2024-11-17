const mongoose = require('mongoose');
const Car = require('./models/carModel'); // Adjust path as needed

mongoose.connect('mongodb://localhost:27017/auto_avenue', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const newCars = [
  {
    make: "Hyundai",
    model: "i20",
    versions: ["Magna", "Sportz", "Asta"],
    prices: ["₹6.99 lakh", "₹7.85 lakh", "₹8.69 lakh"],
    brochureLink: "Hyundai i20 Brochure",
    imageUrl: "Hyundai i20 Image",
    carInfo: "The Hyundai i20 is a premium hatchback that combines style with performance. With a sleek design, advanced safety features, and a spacious cabin, it offers comfort and convenience for city and highway drives. Known for its efficient engine options and tech-packed interiors, it’s a favorite among young buyers."
  },
  {
    make: "Mahindra",
    model: "XUV300",
    versions: ["W4", "W6", "W8"],
    prices: ["₹8.41 lakh", "₹9.40 lakh", "₹10.65 lakh"],
    brochureLink: "Mahindra XUV300 Brochure",
    imageUrl: "Mahindra XUV300 Image",
    carInfo: "The Mahindra XUV300 is a subcompact SUV that focuses on safety and performance. It offers powerful engine options, multiple airbags, and other safety features, making it an excellent choice for family trips and highway cruising. With a comfortable interior, it provides a spacious cabin and ample storage."
  },
  {
    make: "Mercedes-Benz",
    model: "S-Class",
    versions: ["S 350d", "S 450 4MATIC"],
    prices: ["₹1.60 crore", "₹1.69 crore"],
    brochureLink: "https://www.mercedes-benz.co.in/content/dam/india/passengercars/models/s-class/The-Mercedes-Benz-S-Class.pdf",
    imageUrl: "Mercedes-Benz S-Class Image",
    carInfo: "The Mercedes-Benz S-Class is the flagship luxury sedan from Mercedes, known for its exquisite design, advanced technology, and unmatched comfort. This vehicle features plush interiors, cutting-edge safety systems, and innovative entertainment options, ensuring a luxurious experience for both drivers and passengers. The S-Class combines powerful performance with a smooth, quiet ride, making it a top choice among luxury car buyers in India."
  }
];

const addCars = async () => {
  try {
    for (const carData of newCars) {
      const existingCar = await Car.findOne({ make: carData.make, model: carData.model });
      if (!existingCar) {
        await Car.create(carData);
        console.log(`Added new car: ${carData.make} ${carData.model}`);
      } else {
        console.log(`Car already exists: ${carData.make} ${carData.model}`);
      }
    }
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

addCars();
