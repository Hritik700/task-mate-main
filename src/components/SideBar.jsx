import React from "react";

// Icon Components
const Icon = ({ path, className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const DashboardIcon = () => <Icon path="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />;
const TasksIcon = () => <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
const AnalyticsIcon = () => <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />;
const SettingsIcon = () => <Icon path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />;

const SideBar = ({ activePage, onNavigate, isOpen, setIsOpen, user }) => {
  const navLinks = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Tasks", icon: <TasksIcon /> },
    { name: "Analytics", icon: <AnalyticsIcon /> },
    { name: "Settings", icon: <SettingsIcon /> },
  ];

  // Default avatar if user has no photo
  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-[#2D3748] text-white flex flex-col p-4 z-30 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
      >
        <div className="mb-10">
          <h1 className="text-2xl font-bold">TaskMate</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => onNavigate(link.name)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 text-left ${
                  activePage === link.name
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
              >
                <span className="mr-3">{link.icon}</span>
                <span className="font-semibold">{link.name}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* User Profile Section */}
        <div className="mt-auto">
          <div className="flex items-center p-3 bg-slate-700/50 rounded-lg">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user?.photo || defaultAvatar}
              alt="User avatar"
            />
            <div className="ml-3">
              <p className="text-sm font-semibold text-white">
                {user?.name || "Guest User"}
              </p>
              <p className="text-xs text-slate-400">
                {user?.email || "No Email"}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
