export const dateUtils = {
    addDays: (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
  
    isExpired: (date) => {
      return new Date(date) < new Date();
    },
  
    getRemainingDays: (endDate) => {
      const end = new Date(endDate);
      const now = new Date();
      const diffTime = Math.abs(end - now);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
  
    getMonthName: (date) => {
      return new Date(date).toLocaleString('es-CO', { month: 'long' });
    }
  };