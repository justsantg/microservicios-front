import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './layout/Navigation.css';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;