"use client"
import React from 'react';
import Tabs from '../common/Tabs';
import ProfileForm from '../profile/ProfileForm';


const Settings: React.FC = () => {
  return (
    <div className="w-full">
      <Tabs
        tabs={['Edit Profile', 'Preferences', 'Security']}
      >
        <ProfileForm /> 
        <div>Preferences Content</div> 
        <div>Security Content</div> 
      </Tabs>
    </div>
  );
};

export default Settings
