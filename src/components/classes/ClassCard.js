import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClassCard.css';

const ClassCard = ({ classInfo }) => {
    const navigate = useNavigate();

    const handleBookClass = () => {
        navigate(`/book-class/${classInfo.id}`);
    };

    return (
        <div className="class-card">
            <div className="class-image">
                <img src={classInfo.imageUrl} alt={classInfo.name} />
                <div className="class-category">{classInfo.category}</div>
            </div>
            <div className="class-details">
                <h3>{classInfo.name}</h3>
                <p className="instructor">Instructor: {classInfo.instructor}</p>
                <p className="schedule">
                    {new Date(classInfo.date).toLocaleDateString()} at {classInfo.time}
                </p>
                <p className="duration">Duration: {classInfo.duration} minutes</p>
                <p className="capacity">
                    Capacity: {classInfo.currentAttendees}/{classInfo.maxCapacity}
                </p>
                <p className="description">{classInfo.description}</p>
            </div>
            <div className="class-actions">
                <button 
                    onClick={handleBookClass}
                    disabled={classInfo.currentAttendees >= classInfo.maxCapacity}
                >
                    {classInfo.currentAttendees >= classInfo.maxCapacity ? 'Class Full' : 'Book Now'}
                </button>
            </div>
        </div>
    );
};

export default ClassCard;