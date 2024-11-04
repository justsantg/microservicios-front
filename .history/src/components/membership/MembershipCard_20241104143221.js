import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipCard.css';

const MembershipCard = ({ membership, isActive, onSelect }) => {
    const navigate = useNavigate();

    const handleSelectMembership = () => {
        if (onSelect) {
            onSelect(membership);
        } else {
            navigate(`/membership/purchase/${membership.id}`);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    const formatDuration = (duration) => {
        if (duration === 1) return '1 Month';
        if (duration === 12) return '1 Year';
        return `${duration} Months`;
    };

    return (
        <div className={`membership-card ${isActive ? 'active' : ''}`}>
            <div className="membership-card-header">
                <h3 className="membership-title">{membership.name}</h3>
                <div className="membership-price">
                    <span className="price">{formatPrice(membership.price)}</span>
                    <span className="duration">/{formatDuration(membership.duration)}</span>
                </div>
            </div>

            <div className="membership-benefits">
                <h4>Benefits Include:</h4>
                <ul>
                    {membership.benefits.map((benefit, index) => (
                        <li key={index}>
                            <span className="benefit-icon">✓</span>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="membership-details">
                <p className="membership-description">
                    {membership.description}
                </p>
            </div>

            <div className="membership-footer">
                <button 
                    className={`select-button ${isActive ? 'active' : ''}`}
                    onClick={handleSelectMembership}
                    disabled={isActive}
                >
                    {isActive ? 'Current Plan' : 'Select Plan'}
                </button>
                
                {membership.promotional && (
                    <div className="promotional-tag">
                        Limited Time Offer!
                    </div>
                )}
            </div>
        </div>
    );
};

export default MembershipCard;