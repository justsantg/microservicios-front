import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({ size = 'medium', color = '#007bff', text = 'Loading...' }) => {
    return (
        <div className={`loading-container ${size}`}>
            <div className="loading-spinner" style={{ borderTopColor: color }}></div>
            {text && <p className="loading-text">{text}</p>}
        </div>
    );
};

Loading.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.string,
    text: PropTypes.string
};

export default Loading;