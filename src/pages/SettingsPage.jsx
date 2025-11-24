import React from 'react';
import ProfileSettings from '../components/ProfileSettings';
import NotificationSettings from '../components/NotificationSettings';
import AppearanceSettings from '../components/AppearanceSettings';
import IntegrationSettings from '../components/IntegrationSettings';

const SettingsPage = ({ user, updateUser, theme, toggleTheme }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Pass user + updateUser */}
        <ProfileSettings user={user} updateUser={updateUser} />

        {/* Pass theme + toggleTheme */}
        <AppearanceSettings theme={theme} toggleTheme={toggleTheme} />

        <NotificationSettings />
        <IntegrationSettings />
      </div>
    </div>
  );
};

export default SettingsPage;
