import React from 'react';
import  useAuth  from '../hooks/useAuth';
import { MembershipStatus, PaymentHistory, WorkoutSchedule } from '../components';
import { Container, Row, Col } from 'react-bootstrap';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Panel de Control</h1>
        <p>Bienvenido, {user.name}</p>
      </header>

      <div className="dashboard-grid">
        <MembershipStatus />
        <PaymentHistory />
        <WorkoutSchedule />
      </div>
    </div>
  );
};

export default DashboardPage;