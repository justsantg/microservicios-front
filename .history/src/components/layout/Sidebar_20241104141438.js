import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector(state => state.user.profile);

    const menuItems = [
        {
            title: 'Dashboard',
            icon: '📊',
            path: '/dashboard'
        },
        {
            title: 'My Profile',
            icon: '👤',
            path: '/profile'
        },
        {
            title: 'My Classes',
            icon: '🏋️‍♂️',
            path: '/my-classes'
        },
        {
            title: 'Schedule',
            icon: '📅',
            path: '/schedule'
        },
        {
            title: 'My Progress',
            icon: '📈',
            path: '/progress'
        },
        {
            title: 'Membership',
            icon: '💳',
            path: '/membership'
        },
        {
            title: 'Payments',
            icon: '💰',
            path: '/payments'
        },
        {
            title: 'Notifications',
            icon: '🔔',
            path: '/notifications'
        }
    ];

    const trainerItems = [
        {
            title: 'My Students',
            icon: '👥',
            path: '/my-students'
        },
        {
            title: 'Class Management',
            icon: '📋',
            path: '/class-management'
        }
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '◀' : '▶'}
            </div>

            <div className="sidebar-header">
                <div className="user-info">
                    <div className="user-avatar">
                        {user?.avatar ? (
                            <img src={user.avatar} alt="User avatar" />
                        ) : (
                            <div className="avatar-placeholder">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                        )}
                    </div>
                    <div className="user-details">
                        <h3>{user?.name || 'User Name'}</h3>
                        <span>{user?.membershipType || 'Basic Member'}</span>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <Link 
                        key={index} 
                        to={item.path} 
                        className="nav-item"
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-title">{item.title}</span>
                    </Link>
                ))}

                {user?.role === 'trainer' && (
                    <div className="trainer-section">
                        <div className="section-divider">Trainer Tools</div>
                        {trainerItems.map((item, index) => (
                            <Link 
                                key={index} 
                                to={item.path} 
                                className="nav-item"
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-title">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            <div className="sidebar-footer">
                <Link to="/settings" className="nav-item">
                    <span className="nav-icon">⚙️</span>
                    <span className="nav-title">Settings</span>
                </Link>
                <Link to="/help" className="nav-item">
                    <span className="nav-icon">❓</span>
                    <span className="nav-title">Help & Support</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;