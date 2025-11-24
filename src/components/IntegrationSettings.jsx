import React from 'react';

// --- Helper Components Defined Locally ---
// A reusable container for the settings section
const SettingsCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md mb-8">
    <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);
// --- End of Helper Components ---


const IntegrationSettings = () => (
  <SettingsCard title="Integrations">
    <div className="flex items-center justify-between">
        <span className="text-gray-700">Google Calendar</span>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Connect
        </button>
    </div>
    <div className="flex items-center justify-between">
        <span className="text-gray-700">Slack</span>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Connect
        </button>
    </div>
  </SettingsCard>
);

export default IntegrationSettings;
