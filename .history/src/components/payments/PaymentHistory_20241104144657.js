import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './PaymentHistory.css';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        fetchPaymentHistory();
    }, []);

    const fetchPaymentHistory = async () => {
        try {
            const response = await fetch('http://your-api/payments/history', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch payment history');
            }

            const data = await response.json();
            setPayments(data.payments);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Loading payment history...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="payment-history-container">
            <h2>Payment History</h2>
            {payments.length === 0 ? (
                <p>No payment history available.</p>
            ) : (
                <table className="payment-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id}>
                                <td>{new Date(payment.date).toLocaleDateString()}</td>
                                <td>{payment.description}</td>
                                <td>${payment.amount.toFixed(2)}</td>
                                <td>
                                    <span className={`status ${payment.status.toLowerCase()}`}>
                                        {payment.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PaymentHistory;