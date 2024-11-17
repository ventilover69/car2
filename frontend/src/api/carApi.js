import axios from 'axios';

export const getCarDetails = async (carId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/cars/${carId}`);
    console.log('Car details:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching car details:', error);
    return null;
  }
};