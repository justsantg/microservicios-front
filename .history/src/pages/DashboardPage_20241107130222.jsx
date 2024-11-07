import React from 'react';
import useAuth from '../hooks/useAuth';
import { MembershipStatus } from '../components/membership/MembershipStatus.';
import { PaymentHistory } from '../components/payments/PaymentHistory';
import { ClassList } from '../components/classes/ClassList';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Panel de Control</h1>
        <p>Bienvenido, {user?.name || 'Usuario'}</p>
      </header>

      <div className="dashboard-grid">
        <MembershipStatus />
        <PaymentHistory />
        <ClassList />
      </div>
    </div>
  );
};

export default DashboardPage;