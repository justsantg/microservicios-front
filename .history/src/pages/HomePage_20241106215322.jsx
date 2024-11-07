import React from 'react';
import useAuth from '../hooks/useAuth';
import UserProfile from '../components/UserProfile'; // Asegúrate de que esta ruta sea correcta
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useAuth(); // Solo necesitas verificar si el usuario está autenticado

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Bienvenido a GymFit</h1>
        {isAuthenticated ? (
          <>
            <h2>Bienvenido de nuevo!</h2>
            <User Profile /> {/* Aquí se incluye el componente UserProfile */}
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