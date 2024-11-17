import React, { useState } from 'react';
import axios from 'axios';

function TestDriveForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    carMakeModel: '',
    version: '',
    testDriveDate: '',
    city: '',
    branch: ''
  });
  const [bookingId, setBookingId] = useState(''); // State for booking ID

  const carOptions = {
    'Tata - Punch': ['Pure', 'Adventure', 'Accomplished'],
    'Maruti Suzuki - Dzire': ['LXi', 'VXi', 'ZXi'],
    'Mahindra - Thar': ['AX', 'LX', 'LX Convertible'],
    'Hyundai - Creta': ['E', 'EX', 'SX'],
    'Kia - Seltos': ['HTE', 'HTK', 'GTX'],
    'Hyundai - i20': ['Magna', 'Sportz', 'Asta'],
    'Mahindra - XUV300': ['W4', 'W6', 'W8'],
    'Mercedes-Benz - S-Class': ['S 350d', 'S 450 4MATIC']
  };

  const cityBranches = {
    Bangalore: ['JP Nagar', 'Silk Board', 'MG Road', 'Indiranagar', 'Koramangala'],
    Mumbai: ['Bandra', 'Andheri', 'Colaba', 'Juhu', 'Powai'],
    Delhi: ['Connaught Place (CP)', 'Chandni Chowk', 'Karol Bagh', 'Hauz Khas', 'Saket'],
    Chennai: ['T. Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'Besant Nagar'],
    Hyderabad: ['Banjara Hills', 'Hitech City', 'Gachibowli', 'Jubilee Hills', 'Begumpet'],
    Kolkata: ['Park Street', 'Salt Lake', 'Howrah', 'New Town', 'Alipore'],
    Pune: ['Koregaon Park', 'Kothrud', 'Viman Nagar', 'Hinjawadi', 'Shivajinagar'],
    Ahmedabad: ['Satellite', 'Navrangpura', 'Bodakdev', 'SG Highway', 'Maninagar']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCarMakeModelChange = (e) => {
    const selectedCar = e.target.value;
    setFormData({ ...formData, carMakeModel: selectedCar, version: '' });
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData({ ...formData, city: selectedCity, branch: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (bookingId) {
        // Update existing booking
        await axios.put(`http://localhost:5000/test-drive/${bookingId}`, formData);
        alert('Test drive booking updated successfully!');
      } else {
        // Create new booking
        await axios.post('http://localhost:5000/test-drive', formData);
        alert('Test drive booked successfully!');
      }
      setBookingId(''); // Clear booking ID after submission
      setFormData({
        fullName: '',
        phone: '',
        carMakeModel: '',
        version: '',
        testDriveDate: '',
        city: '',
        branch: ''
      });
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to submit form');
    }
  };

  const handleDelete = async () => {
    if (!bookingId) {
      alert('Please provide a booking ID to delete.');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/test-drive/${bookingId}`);
      alert('Test drive booking deleted successfully!');
      setBookingId(''); // Clear booking ID after deletion
      setFormData({
        fullName: '',
        phone: '',
        carMakeModel: '',
        version: '',
        testDriveDate: '',
        city: '',
        branch: ''
      });
    } catch (error) {
      console.error('Failed to delete booking:', error);
      alert('Failed to delete booking');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Test Drive</h2>
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <select name="carMakeModel" value={formData.carMakeModel} onChange={handleCarMakeModelChange}>
        <option>Select Car Make & Model</option>
        {Object.keys(carOptions).map((car) => (
          <option key={car} value={car}>
            {car}
          </option>
        ))}
      </select>
      <select name="version" value={formData.version} onChange={handleChange} disabled={!formData.carMakeModel}>
        <option>Select Version</option>
        {formData.carMakeModel &&
          carOptions[formData.carMakeModel].map((version) => (
            <option key={version} value={version}>
              {version}
            </option>
          ))}
      </select>
      <input
        name="testDriveDate"
        type="date"
        value={formData.testDriveDate}
        onChange={handleChange}
      />
      <select name="city" value={formData.city} onChange={handleCityChange}>
        <option>Select City</option>
        {Object.keys(cityBranches).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select name="branch" value={formData.branch} onChange={handleChange} disabled={!formData.city}>
        <option>Select Branch</option>
        {formData.city &&
          cityBranches[formData.city].map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
      </select>

      <input
        name="bookingId"
        placeholder="Booking ID (for update or delete)"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
      />

      <button type="submit">{bookingId ? 'Update Booking' : 'Submit'}</button>
      <button type="button" onClick={handleDelete}>
        Delete Booking
      </button>
    </form>
  );
}

export default TestDriveForm;
