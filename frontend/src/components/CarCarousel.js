import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carImage1 from '../assets/car1.jpeg';
import carImage2 from '../assets/car2.jpeg';
import carImage3 from '../assets/car3.jpeg';
import carImage4 from '../assets/car4.jpeg'; 
import carImage5 from '../assets/car5.jpeg'; 
import carImage6 from '../assets/car6.jpeg'; 
import carImage7 from '../assets/car7.jpeg'; 
import carImage8 from '../assets/car8.jpeg';
const CarCarousel = () => {
  const images = [
    { src: carImage1, link: '/car-details/672e6845fe84021bd8b15ebf' },
    { src: carImage2, link: '/car-details/672e6845fe84021bd8b15ec0' },
    { src: carImage3, link: '/car-details/672e6845fe84021bd8b15ec1' },
    { src: carImage4, link: '/car-details/672e6845fe84021bd8b15ec2' },
    { src: carImage5, link: '/car-details/672e6845fe84021bd8b15ec3' },
    { src: carImage6, link: '/car-details/67307aaec31d4f3e8c381f9f' },
    { src: carImage7, link: '/car-details/67307b2ac31d4f3e8c381fa0' },
    { src: carImage8, link: '/car-details/67307b35c31d4f3e8c381fa1' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <button onClick={goToPrevious} style={{ position: 'absolute', left: 0, top: '50%' }}>
        &#9664;
      </button>
      <Link to={images[currentIndex].link}>
        <img
          src={images[currentIndex].src}
          alt="Car"
          style={{ width: '80%', height: 'auto', cursor: 'pointer' }}
        />
      </Link>
      <button onClick={goToNext} style={{ position: 'absolute', right: 0, top: '50%' }}>
        &#9654;
      </button>
    </div>
  );
};

export default CarCarousel;