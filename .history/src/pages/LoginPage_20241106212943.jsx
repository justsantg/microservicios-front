// src/pages/LoginPage.jsx
import React from 'react';
import useAuth from '../hooks/useAuth'; // Asegúrate de que la ruta sea correcta

const LoginPage = () => {
    const { user, loading, error } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Login Page</h1>
            {user ? <p>Welcome, {user.name}</p> : <p>Please log in.</p>}
        </div>
    );
};

export default LoginPage;