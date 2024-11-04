import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './PaymentForm.css';

const PaymentForm = ({ amount, bookingId }) => {
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic form validation
        if (!cardNumber || !expiryDate || !cvv || !name) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('http://your-api/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    amount,
                    bookingId,
                    cardNumber,
                    expiryDate,
                    cvv,
                    name
                })
            });

            if (!response.ok) {
                throw new Error('Payment failed');
            }

            const data = await response.json();
            navigate('/payment/success', { state: { paymentId: data.paymentId } });
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="payment-form-container">
            <h2>Payment Details</h2>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                            type="text"
                            id="expiryDate"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YY"
                            maxLength="5"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            maxLength="3"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name on Card</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <button type="submit" className="pay-button">Pay ${amount}</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;