import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MembershipForm.css';

const MembershipForm = () => {
    const navigate = useNavigate();
    const { membershipId } = useParams();
    const user = useSelector(state => state.auth.user);

    const [membership, setMembership] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        paymentMethod: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        agreedToTerms: false
    });

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        fetchMembershipDetails();
    }, [membershipId, user, navigate]);

    const fetchMembershipDetails = async () => {
        try {
            const response = await fetch(`http://your-api/memberships/${membershipId}`);
            if (!response.ok) throw new Error('Failed to fetch membership details');
            
            const data = await response.json();
            setMembership(data.membership);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.paymentMethod) {
            errors.paymentMethod = 'Please select a payment method';
        }
        
        if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber)) {
            errors.cardNumber = 'Please enter a valid 16-digit card number';
        }
        
        if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
            errors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
        }
        
        if (!formData.cvv || !/^\d{3,4}$/.test(formData.cvv)) {
            errors.cvv = 'Please enter a valid CVV';
        }
        
        if (!formData.name.trim()) {
            errors.name = 'Please enter the cardholder name';
        }
        
        if (!formData.agreedToTerms) {
            errors.agreedToTerms = 'You must agree to the terms and conditions';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://your-api/memberships/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    membershipId,
                    paymentDetails: formData
                })
            });

            if (!response.ok) throw new Error('Failed to process payment');

            const data = await response.json();
            navigate('/dashboard', { 
                state: { 
                    success: true, 
                    message: 'Membership purchased successfully!' 
                }
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!membership) return <div className="error">Membership not found</div>;

    return (
        <div className="membership-form-container">
            <div className="membership-summary">
                <h2>Purchase Membership</h2>
                <div className="selected-plan">
                    <h3>{membership.name}</h3>
                    <p className="price">${membership.price}/month</p>
                    <p className="duration">{membership.duration} months</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label>Payment Method</label>
                    <select 
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                    >
                        <option value="">Select payment method</option>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                    </select>
                    {error?.paymentMethod && <span className="error">{error.paymentMethod}</span>}
                </div>

                <div className="form-group">
                    <label>Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="16"
                    />
                    {error?.cardNumber && <span className="error">{error.cardNumber}</span>}
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                        />
                        {error?.expiryDate && <span className="error">{error.expiryDate}</span>}
                    </div>

                    <div className="form-group">
                        <label>CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength="4"
                        />
                        {error?.cvv && <span className="error">{error.cvv}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                    />
                    {error?.name && <span className="error">{error.name}</span>}
                </div>

                <div className="form-group checkbox">
                    <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleInputChange}
                        id="terms"
                    />
                    <label htmlFor="terms">I agree to the terms and conditions</label>
                    {error?.agreedToTerms && <span className="error">{error.agreedToTerms}</span>}
                </div>

                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? 'Processing...' : 'Purchase Membership'}
                </button>
            </form>
        </div>
    );
};

export default MembershipForm;