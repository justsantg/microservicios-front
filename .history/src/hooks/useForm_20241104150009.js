import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [values, handleChange, reset];
};

export default useForm;