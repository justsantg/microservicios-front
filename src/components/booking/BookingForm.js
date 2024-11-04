import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookClass } from '../../redux/actions/bookingActions';

const BookingForm = ({ classId }) => {
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookClass(classId, date));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <button type="submit">Book Class</button>
    </form>
  );
};

export default BookingForm;