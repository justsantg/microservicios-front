import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/classes', label: 'Classes' },
    { path: '/memberships', label: 'Memberships' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/schedule', label: 'Schedule' },
  ];

  // Función para manejar el logout
  const handleLogout = () => {
    // Dispatch de la acción de logout (debes implementar esta acción en tu Redux)
    dispatch({ type: 'LOGOUT' });
    // Limpiar el localStorage si estás guardando el token ahí
    localStorage.removeItem('token');
    // Redirigir al home
    navigate('/');
    // Cerrar el menú móvil si está abierto
    setIsOpen(false);
  };

  // Función para cerrar el menú móvil al navegar
  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/" onClick={handleNavigation}>GymFit</Link>
      </div>

      <button 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
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
            onClick={handleNavigation}
          >
            {item.label}
          </Link>
        ))}

        {isAuthenticated ? (
          <>
            <Link 
              to="/dashboard" 
              className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
              onClick={handleNavigation}
            >
              Dashboard
            </Link>
            <Link 
              to="/profile" 
              className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}
              onClick={handleNavigation}
            >
              {user?.name || 'Profile'}
            </Link>
            <button 
              className="nav-button logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="nav-button"
              onClick={handleNavigation}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="nav-button secondary"
              onClick={handleNavigation}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;