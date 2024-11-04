export const calculateMembershipPrice = (basePrice, discountPercentage = 0) => {
    return basePrice - (basePrice * (discountPercentage / 100));
  };
  
  export const calculateBMI = (weight, height) => {
    // Peso en kg, altura en metros
    return (weight / (height * height)).toFixed(2);
  };
  
  export const calculateCaloriesBurned = (activity, duration, weight) => {
    const MET = {
      running: 8,
      walking: 3.5,
      cycling: 7.5,
      swimming: 6
    };
    
    // Calorías = MET * peso en kg * duración en horas
    return (MET[activity] * weight * (duration / 60)).toFixed(2);
  };