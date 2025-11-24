import React from "react";

const SettingsCard = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8">
    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
      {title}
    </h2>
    <div className="space-y-6">{children}</div>
  </div>
);

const AppearanceSettings = ({ theme, toggleTheme }) => {
  return (
    <SettingsCard title="Appearance Settings">
      {/* THEME SWITCH */}
      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300">
          Dark Mode
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          {/* Hidden Checkbox */}
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="sr-only peer"
          />

          {/* Track */}
          <div
            className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full
            peer peer-checked:bg-blue-600 transition-all dark:bg-gray-700"
          ></div>

          {/* Toggle Knob */}
          <div
            className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
            transition-all peer-checked:translate-x-5"
          ></div>
        </label>
      </div>

      {/* Coming soon */}
      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300">
          Font Size
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          (Coming soon…)
        </span>
      </div>
    </SettingsCard>
  );
};

export default AppearanceSettings;
