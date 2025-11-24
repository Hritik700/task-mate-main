import React, { useState, useEffect } from "react";

const SettingsCard = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8 transition-all">

    <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
    <div className="space-y-6">{children}</div>
  </div>
);

const InputField = ({ value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const ProfileSettings = ({ user, updateUser }) => {
  // Local state to edit fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  // Load user values into input fields
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  // Handle Update
  const handleUpdate = () => {
    updateUser({ name, email });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000); // hide after 2 sec
  };

  return (
    <SettingsCard title="Profile Settings">
      
      <InputField
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <InputField
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg
                 hover:bg-blue-700 transition-colors"
      >
        Update Profile
      </button>

      {success && (
        <p className="text-green-600 text-sm font-semibold">
          ✔ Profile updated successfully!
        </p>
      )}
    </SettingsCard>
  );
};

export default ProfileSettings;
