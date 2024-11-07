import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Componente UserProfile
const UserProfile = () => {
  const user = useSelector(state => state.user.profile);

  return (
    <div className="user-profile">
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Membresía: {user.membership}</p>
    </div>
  );
};

// Componente HomePage
const HomePage = () => {
  const { isAuthenticated } = useAuth(); // Verifica si el usuario está autenticado

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Bienvenido a GymFit</h1>
        {isAuthenticated ? (
          <>
            <h2>Bienvenido de nuevo!</h2>
            <User Profile /> {/* Corrige el nombre del componente aquí */}
          </>
        ) : (
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary">Iniciar Sesión</Link>
            <Link to="/register" className="btn btn-secondary">Registrarse</Link>
          </div>
        )}
      </header>

      <section className="features-section">
        <h2>Nuestros Servicios</h2>
        <div className="features-grid">
          {/* Aquí puedes agregar cards o elementos que muestren los servicios */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;