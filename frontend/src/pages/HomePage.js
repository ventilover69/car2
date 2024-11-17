import React from 'react';
import { Link } from 'react-router-dom';
import CarCarousel from '../components/CarCarousel';

function HomePage() {
  return (
    <div>
      <h1>Auto Avenue</h1>
      <p>
        <Link to="/test-drive" style={{ textDecoration: 'none', color: 'blue' }}>
          <button>Book a Test Drive</button>
        </Link>
      </p>
      <p>
        <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
          <button>Login</button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'blue', marginLeft: '10px' }}>
          <button>Signup</button>
        </Link>
      </p>
      <CarCarousel />
      <p>Contact us: 123456789</p>
    </div>
  );
}

export default HomePage;
