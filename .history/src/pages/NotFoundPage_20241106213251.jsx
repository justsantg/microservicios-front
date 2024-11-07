// src/pages/NotFoundPage.jsx
import React from 'react';

const NotFoundPage = () => {
    const styles = {
        textAlign: 'center',
        marginTop: '50px',
        fontSize: '24px',
        color: 'red',
    };

    return (
        <div style={styles}>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;