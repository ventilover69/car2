const mongoose = require('mongoose');
const Car = require('./models/carModel');

mongoose.connect('mongodb://localhost:27017/auto-avenue', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cars = [
  {
    make: 'Tata',
    model: 'Punch',
    versions: ['Pure', 'Adventure', 'Accomplished'],
    prices: ['₹5.99 lakh', '₹6.89 lakh', '₹7.99 lakh'],
    brochureLink: 'https://www.youtube.com/watch?v=Gy2DX0eEz8w&t=1025s',
    imageUrl: 'https://media.discordapp.net/attachments/788734142719983626/1277541732262608906/e2cfdeb3-03c4-44cd-bb93-ba43d1b6190a_venti-wallpaper-mobile.png?ex=672f19f4&is=672dc874&hm=d319ce34c11cd2ba658aae433f6cd649d40c6269d3de9132a4cdac22c00cfcc0&=&format=webp&quality=lossless&width=280&height=606',
    carInfo: 'The Tata Punch is a compact SUV with a bold design, featuring 90-degree door openings for easy access, projector headlamps, and spacious interiors. Known for its safety features and fuel efficiency, it’s a great choice for city driving and short trips.',
  },
  {
    make: 'Maruti Suzuki',
    model: 'Dzire',
    versions: ['LXi', 'VXi', 'ZXi'],
    prices: ['₹6.51 lakh', '₹7.35 lakh', '₹8.15 lakh'],
    brochureLink: 'https://www.youtube.com/watch?v=Gy2DX0eEz8w&t=1025s',
    imageUrl: 'https://cdn.discordapp.com/attachments/788734142719983626/1246509382439665835/image.png?ex=672f95d3&is=672e4453&hm=dd069f70a65341c65ff8b6c7cf3a7b3556b4fbf5ae287f71ad616ebc0e917119&',
    carInfo: 'The Dzire is a compact sedan, popular for its fuel efficiency and smooth drive, with a refined interior and various comfort features. The car’s 1.2L petrol engine ensures good mileage, making it a favorite for small families.',
  },
  {
    make: 'Mahindra',
    model: 'Thar',
    versions: ['AX', 'LX', 'LX Convertible'],
    prices: ['₹13.49 lakh', '₹14.29 lakh', '₹15.09 lakh'],
    brochureLink: 'https://www.youtube.com/watch?v=Gy2DX0eEz8w&t=1025s',
    imageUrl: 'https://media.discordapp.net/attachments/788734142719983626/1244882582265401344/Screenshot_20240528_104421_Instagram.jpg?ex=672f9980&is=672e4800&hm=e5bc003eb1033498855cbdfbf0b3e24825bcbe99a440dab624eed5cf14c6a554&=&format=webp&width=272&height=605',
    carInfo: 'Mahindra Thar is an off-road SUV with a rugged build and powerful performance, popular among adventure seekers. It comes with 4x4 capability and a robust design ideal for challenging terrains.',
  },
  {
    make: 'Hyundai',
    model: 'Creta',
    versions: ['E', 'EX', 'SX'],
    prices: ['₹10.87 lakh', '₹11.97 lakh', '₹13.98 lakh'],
    brochureLink: 'https://www.youtube.com/watch?v=Gy2DX0eEz8w&t=1025s',
    imageUrl: 'https://cdn.discordapp.com/attachments/788734142719983626/1240230381895290910/image.png?ex=672f278d&is=672dd60d&hm=bb97a9ce7be80e5c632d9bc5053ea00af8e4a84ece070b29a8121adbb3b771a0&',
    carInfo: 'The Hyundai Creta is a versatile compact SUV with premium features, a spacious cabin, and advanced safety technologies. It is known for its refined styling and high-performance engines.',
  },
  {
    make: 'Kia',
    model: 'Seltos',
    versions: ['HTE', 'HTK', 'GTX'],
    prices: ['₹10.89 lakh', '₹12.89 lakh', '₹16.39 lakh'],
    brochureLink: 'https://www.youtube.com/watch?v=Gy2DX0eEz8w&t=1025s',
    imageUrl: 'https://cdn.discordapp.com/attachments/788734142719983626/1239259803499630612/image.png?ex=672f9421&is=672e42a1&hm=487a351c47e9497662b06c067d08ab5333bc4aad109585d0c20fbb719509317b&',
    carInfo: 'The Kia Seltos is a feature-rich compact SUV, known for its stylish design, high-tech features, and comfort. It’s suitable for families looking for a reliable and tech-forward vehicle.',
  },
];

const seedDatabase = async () => {
  try {
    await Car.deleteMany({});
    await Car.insertMany(cars);
    console.log('Database seeded with car data');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
