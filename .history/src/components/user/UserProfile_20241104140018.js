import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector(state => state.user.profile);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Membership: {user.membership}</p>
    </div>
  );
};

export default UserProfile;