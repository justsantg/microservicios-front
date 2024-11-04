import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>GymFit</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/memberships">Memberships</Link>
      </nav>
    </header>
  );
};

export default Header;