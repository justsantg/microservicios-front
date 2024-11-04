import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TrainerCard from './TrainerCard';
import './TrainerList.css';

const TrainerList = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        fetchTrainers();
    }, []);

    const fetchTrainers = async () => {
        try {
            const response = await fetch('http://your-api/trainers', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch trainers');
            }
            const data = await response.json();
            setTrainers(data.trainers);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredTrainers = filter === 'all' 
        ? trainers 
        : trainers.filter(trainer => trainer.specialization === filter);

    if (loading) return <div className="loading">Loading trainers...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="trainer-list-container">
            <h2>Our Trainers</h2>
            <div className="filter-container">
                <label htmlFor="filter">Filter by specialization: </label>
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="all">All Specializations</option>
                    <option value="strength">Strength Training</option>
                    <option value="cardio">Cardio</option>
                    <option value="yoga">Yoga</option>
                    <option value="nutrition">Nutrition</option>
                    {/* Add more specializations as needed */}
                </select>
            </div>
            <div className="trainer-grid">
                {filteredTrainers.map(trainer => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                ))}
            </div>
            {filteredTrainers.length === 0 && (
                <p className="no-trainers">No trainers available for the selected specialization.</p>
            )}
        </div>
    );
};

export default TrainerList;