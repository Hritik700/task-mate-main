import React, { useState } from 'react';


const SettingsCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md mb-8">
    <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const ToggleSwitch = ({ label }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <button 
        onClick={() => setIsEnabled(!isEnabled)}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isEnabled ? 'bg-blue-600' : 'bg-gray-200'}`}
      >
        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>
  );
};
// --- End of Helper Components ---


const NotificationSettings = () => (
  <SettingsCard title="Notification Settings">
    <ToggleSwitch label="Email Notifications" />
    <ToggleSwitch label="In-app Notifications" />
    <ToggleSwitch label="Daily Summary Emails" />
  </SettingsCard>
);

export default NotificationSettings;
