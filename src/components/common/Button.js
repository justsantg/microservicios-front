import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
    children, 
    onClick, 
    type = 'button', 
    variant = 'primary', 
    size = 'medium', 
    disabled = false, 
    fullWidth = false,
    className = ''
}) => {
    return (
        <button
            className={`button ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    className: PropTypes.string
};

export default Button;