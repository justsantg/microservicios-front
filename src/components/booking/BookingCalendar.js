import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import './BookingCalendar.css';

const BookingCalendar = () => {
    const { trainerId } = useParams();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [trainerInfo, setTrainerInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch trainer information and available slots
    useEffect(() => {
        fetchTrainerInfo();
        if (selectedDate) {
            fetchAvailableSlots();
        }
    }, [trainerId, selectedDate]);

    const fetchTrainerInfo = async () => {
        try {
            const response = await fetch(`http://your-api/trainers/${trainerId}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            if (!response.ok) throw new Error('Failed to fetch trainer info');
            const data = await response.json();
            setTrainerInfo(data.trainer);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchAvailableSlots = async () => {
        try {
            const response = await fetch(
                `http://your-api/trainers/${trainerId}/availability?date=${selectedDate.toISOString()}`,
                {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                }
            );
            if (!response.ok) throw new Error('Failed to fetch available slots');
            const data = await response.json();
            setAvailableSlots(data.slots);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset selected time when date changes
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    const handleBooking = async () => {
        if (!selectedDate || !selectedTime) {
            setError('Please select both date and time');
            return;
        }

        try {
            const response = await fetch('http://your-api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    trainerId,
                    date: selectedDate,
                    time: selectedTime,
                    userId: user.id
                })
            });

            if (!response.ok) throw new Error('Booking failed');

            const data = await response.json();
            navigate('/bookings/confirmation', { 
                state: { 
                    bookingId: data.bookingId,
                    trainer: trainerInfo,
                    date: selectedDate,
                    time: selectedTime
                }
            });
        } catch (err) {
            setError(err.message);
        }
    };

    // Custom tileDisabled function for Calendar
    const tileDisabled = ({ date }) => {
        // Disable past dates
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Disable weekends if needed
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        
        return date < today || isWeekend;
    };

    if (loading) return <div className="loading">Loading calendar...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!trainerInfo) return <div className="error">Trainer not found</div>;

    return (
        <div className="booking-calendar-container">
            <div className="trainer-info">
                <img src={trainerInfo.imageUrl} alt={trainerInfo.name} />
                <h2>Book a Session with {trainerInfo.name}</h2>
                <p>{trainerInfo.specialization}</p>
            </div>

            <div className="booking-content">
                <div className="calendar-section">
                    <h3>Select Date</h3>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        tileDisabled={tileDisabled}
                        minDate={new Date()}
                        maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days from now
                    />
                </div>

                {selectedDate && (
                    <div className="time-slots-section">
                        <h3>Available Time Slots</h3>
                        <div className="time-slots-grid">
                            {availableSlots.map((slot) => (
                                <button
                                    key={slot.time}
                                    className={`time-slot ${selectedTime === slot.time ? 'selected' : ''}`}
                                    onClick={() => handleTimeSelection(slot.time)}
                                    disabled={!slot.available}
                                >
                                    {slot.time}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {selectedDate && selectedTime && (
                    <div className="booking-summary">
                        <h3>Booking Summary</h3>
                        <p>Date: {selectedDate.toLocaleDateString()}</p>
                        <p>Time: {selectedTime}</p>
                        <p>Trainer: {trainerInfo.name}</p>
                        <p>Duration: 60 minutes</p>
                        <p>Price: ${trainerInfo.sessionPrice}</p>

                        <button 
                            className="book-session-btn"
                            onClick={handleBooking}
                        >
                            Confirm Booking
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingCalendar;