// src/pages/MembershipPage.jsx
import React from 'react';
import useAPI from '../hooks/useAPI'; // Asegúrate de que la ruta sea correcta

const MembershipPage = () => {
    const { data, loading, error } = useAPI('https://api.example.com/memberships');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Memberships</h1>
            <ul>
                {data.map((membership) => (
                    <li key={membership.id}>{membership.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MembershipPage;