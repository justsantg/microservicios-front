import React from 'react';
import { useAPI  from '../hooks/useAPI';
import { Loading, ErrorMessage } from '../components/common';
import { MembershipCard } from '../components';
import './MembershipPage.css';

const MembershipPage = () => {
  const { data: memberships, loading, error } = useAPI('/api/memberships');

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="membership-page">
      <h1>Nuestras Membresías</h1>
      <div className="memberships-grid">
        {memberships.map(membership => (
          <MembershipCard
            key={membership.id}
            membership={membership}
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;