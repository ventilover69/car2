import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CarInfoPage() {
  const { carId } = useParams();
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/car-info/${carId}`);
        setCarInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch car info:", error);
      }
    };
    fetchCarInfo();
  }, [carId]);

  if (!carInfo) return <p>Loading car information...</p>;

  return (
    <div>
      <img 
        src={carInfo.imageUrl} 
        alt={`${carInfo.make} ${carInfo.model}`} 
        style={{ width: '300px', height: '200px' }} 
      />
      <p>{carInfo['car-info']}</p> {/* Displaying only the car-info field */}
    </div>
  );
  
}

export default CarInfoPage;