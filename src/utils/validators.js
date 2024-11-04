export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidPassword = (password) => {
    // Mínimo 8 caracteres, al menos una letra mayúscula, una minúscula y un número
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const isValidIdentification = (id) => {
    // Validación específica para números de identificación colombianos
    return /^\d{8,10}$/.test(id);
  };
  
  export const validateForm = (values, rules) => {
    const errors = {};
    Object.keys(rules).forEach(field => {
      if (rules[field].required && !values[field]) {
        errors[field] = 'Este campo es requerido';
      }
    });
    return errors;
  };