import React from 'react';
import  useAuth  from '../hooks/useAuth';
import { ProfileForm } from '../components';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();

  return (
    <div className="profile-page">
      <h1>Mi Perfil</h1>
      <ProfileForm
        initialData={user}
        onSubmit={updateProfile}
      />
    </div>
  );
};

export default ProfilePage;