import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainerCard.css';

const TrainerCard = ({ trainer }) => {
    const navigate = useNavigate();

    const handleViewProfile = () => {
        navigate(`/trainer/${trainer.id}`);
    };

    const handleBookSession = () => {
        navigate(`/book-session/${trainer.id}`);
    };

    return (
        <div className="trainer-card">
            <div className="trainer-image">
                <img src={trainer.imageUrl} alt={trainer.name} />
            </div>
            <div className="trainer-details">
                <h3>{trainer.name}</h3>
                <p className="specialization">{trainer.specialization}</p>
                <p className="experience">{trainer.yearsOfExperience} years of experience</p>
                <p className="bio">{trainer.shortBio}</p>
                <div className="trainer-stats">
                    <div className="stat">
                        <span className="stat-value">{trainer.clientsCount}</span>
                        <span className="stat-label">Clients</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">{trainer.rating}</span>
                        <span className="stat-label">Rating</span>
                    </div>
                </div>
            </div>
            <div className="trainer-actions">
                <button onClick={handleViewProfile} className="view-profile-btn">
                    View Profile
                </button>
                <button onClick={handleBookSession} className="book-session-btn">
                    Book Session
                </button>
            </div>
        </div>
    );
};

export default TrainerCard;