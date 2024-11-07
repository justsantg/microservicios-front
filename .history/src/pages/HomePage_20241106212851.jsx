// src/pages/HomePage.jsx
import React from 'react';
import useAuth from '../hooks/useAuth'; // Asegúrate de que la ruta sea correcta

const HomePage = () => {
    const { user, loading, error } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Welcome, {user ? user.name : 'Guest'}</h1>
        </div>
    );
};

export default HomePage;