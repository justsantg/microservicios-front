import React from 'react';
import  useAuth  from '../hooks/useAuth';
import { MembershipStatus  } from '../components';
import { PaymentHistory } from '../components/payments'
import { Class } from '../components/payments'
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