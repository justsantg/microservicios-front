import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/classes', label: 'Classes' },
    { path: '/memberships', label: 'Memberships' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/schedule', label: 'Schedule' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">GymFit</Link>
      </div>

      <button 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        {isAuthenticated ? (
          <>
            <Link to="/profile" className="nav-item">Profile</Link>
            <button className="nav-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button secondary">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;