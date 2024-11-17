import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Home page
import TestDriveForm from './components/TestDriveForm'; // Test Drive Form component
import CarDetailPage from './pages/CarDetailPage'; // Importing CarDetailPage
import CarInfoPage from './pages/CarInfoPage';
import LoginPage from './pages/LoginPage'; // Importing LoginPage
import SignupPage from './pages/SignupPage'; // Importing SignupPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} /> {/* Login Page route */}
        <Route path="/signup" element={<SignupPage />} /> {/* Signup Page route */}
        <Route path="/" element={<HomePage />} /> {/* Homepage route */}
        <Route path="/test-drive" element={<TestDriveForm />} /> {/* Test Drive Form route */}
        <Route path="/car-details/:carId" element={<CarDetailPage />} /> {/* Dynamic route for car details */}
        <Route path="/car-info/:carId" element={<CarInfoPage />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
