import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const [userStats, setUserStats] = useState({
        activeMembership: null,
        lastWorkout: null,
        upcomingClasses: [],
        progress: {}
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Verificar si el usuario está autenticado
        if (!user) {
            navigate('/login');
            return;
        }

        fetchUserData();
    }, [user, navigate]);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://your-api/user/dashboard/${user.id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUserStats(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="dashboard-loading">
                <h2>Loading your dashboard...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-error">
                <h2>Error loading dashboard</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            {/* Header Section */}
            <div className="dashboard-header">
                <h1>Welcome back, {user.firstName}!</h1>
                <p className="last-login">Last login: {new Date(user.lastLogin).toLocaleDateString()}</p>
            </div>

            {/* Quick Stats Section */}
            <div className="quick-stats">
                <div className="stat-card">
                    <h3>Membership Status</h3>
                    <p>{userStats.activeMembership?.type || 'No active membership'}</p>
                    <p className="expiry-date">
                        {userStats.activeMembership?.expiryDate && 
                         `Expires: ${new Date(userStats.activeMembership.expiryDate).toLocaleDateString()}`}
                    </p>
                </div>

                <div className="stat-card">
                    <h3>Last Workout</h3>
                    <p>{userStats.lastWorkout?.date ? 
                        new Date(userStats.lastWorkout.date).toLocaleDateString() : 
                        'No recent workouts'}
                    </p>
                    <p>{userStats.lastWorkout?.type || 'Start your fitness journey today!'}</p>
                </div>

                <div className="stat-card">
                    <h3>Progress Tracker</h3>
                    <div className="progress-stats">
                        <p>Workouts this month: {userStats.progress?.monthlyWorkouts || 0}</p>
                        <p>Total workouts: {userStats.progress?.totalWorkouts || 0}</p>
                    </div>
                </div>
            </div>

            {/* Upcoming Classes Section */}
            <div className="upcoming-classes">
                <h2>Your Upcoming Classes</h2>
                {userStats.upcomingClasses?.length > 0 ? (
                    <div className="classes-grid">
                        {userStats.upcomingClasses.map((class_, index) => (
                            <div key={index} className="class-card">
                                <h4>{class_.name}</h4>
                                <p>{new Date(class_.datetime).toLocaleString()}</p>
                                <p>Instructor: {class_.instructor}</p>
                                <button 
                                    className="cancel-class-btn"
                                    onClick={() => {/* Implementar cancelación de clase */}}
                                >
                                    Cancel Registration
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-classes">No upcoming classes scheduled</p>
                )}
            </div>

            {/* Quick Actions Section */}
            <div className="quick-actions">
                <h2>Quick Actions</h2>
                <div className="actions-grid">
                    <button onClick={() => navigate('/book-class')}>
                        Book a Class
                    </button>
                    <button onClick={() => navigate('/view-schedule')}>
                        View Schedule
                    </button>
                    <button onClick={() => navigate('/update-profile')}>
                        Update Profile
                    </button>
                    <button onClick={() => navigate('/membership-plans')}>
                        Manage Membership
                    </button>
                </div>
            </div>

            {/* Fitness Goals Section */}
            <div className="fitness-goals">
                <h2>Your Fitness Goals</h2>
                <div className="goals-tracker">
                    {userStats.progress?.goals?.map((goal, index) => (
                        <div key={index} className="goal-item">
                            <h4>{goal.name}</h4>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill" 
                                    style={{width: `${goal.progress}%`}}
                                ></div>
                            </div>
                            <p>{goal.progress}% Complete</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="activity-feed">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                    {userStats.progress?.recentActivities?.map((activity, index) => (
                        <div key={index} className="activity-item">
                            <p className="activity-date">
                                {new Date(activity.date).toLocaleDateString()}
                            </p>
                            <p className="activity-description">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;