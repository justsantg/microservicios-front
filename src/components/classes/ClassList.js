import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ClassCard from './ClassCard';
import './ClassList.css';

const ClassList = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const response = await fetch('http://your-api/classes', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch classes');
            }
            const data = await response.json();
            setClasses(data.classes);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredClasses = filter === 'all' 
        ? classes 
        : classes.filter(cls => cls.category === filter);

    if (loading) return <div className="loading">Loading classes...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="class-list-container">
            <h2>Available Classes</h2>
            <div className="filter-container">
                <label htmlFor="filter">Filter by category: </label>
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="all">All Classes</option>
                    <option value="yoga">Yoga</option>
                    <option value="cardio">Cardio</option>
                    <option value="strength">Strength Training</option>
                    <option value="pilates">Pilates</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <div className="class-grid">
                {filteredClasses.map(cls => (
                    <ClassCard key={cls.id} classInfo={cls} />
                ))}
            </div>
            {filteredClasses.length === 0 && (
                <p className="no-classes">No classes available for the selected category.</p>
            )}
        </div>
    );
};

export default ClassList;