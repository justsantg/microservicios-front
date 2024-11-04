export const formatCurrency = (amount, currency = 'COP') => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };
  
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };
  
  export const formatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
  };