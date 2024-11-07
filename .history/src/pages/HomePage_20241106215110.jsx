import React from 'react';
import useAuth from '../hooks/useAuth';
import UserProfile from '../components/user'; // Asegúrate de que esta ruta sea correcta
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Bienvenido a GymFit</h1>
        {isAuthenticated ? (
          <>
            <h2>Bienvenido de nuevo, {user.name}!</h2>
            <User Profile user={user} /> {/* Corrige el nombre del componente aquí */}
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
      ⬤