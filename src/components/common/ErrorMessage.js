import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="error-message">
            <svg className="error-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <p>{message}</p>
            {onRetry && (
                <button className="error-retry" onClick={onRetry}>
                    Retry
                </button>
            )}
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
    onRetry: PropTypes.func
};

export default ErrorMessage;