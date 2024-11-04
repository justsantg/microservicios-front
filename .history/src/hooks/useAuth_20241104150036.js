import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Aquí podrías verificar si hay un token en localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Verificar el token con el backend
      setIsAuthenticated(true);
      // Obtener información del usuario
      // setUser(userData);
    }
  }, []);

  const login = async (credentials) => {
    // Lógica de inicio de sesión
    // Si es exitoso:
    // setIsAuthenticated(true);
    // setUser(userData);
  };

  const logout = () => {
    // Lógica de cierre de sesión
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  return { isAuthenticated, user, login, logout };
};

export default useAuth;