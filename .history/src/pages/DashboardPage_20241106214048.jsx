import React from 'react';
import  useAuth  from '../hooks/useAuth';
import { MembershipList, PaymentHistory, WorkoutSchedule } from '../components';
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
        <MembershipList />
        <PaymentHistory />
        <WorkoutSchedule />
      </div>
    </div>
  );
};

export default DashboardPage;