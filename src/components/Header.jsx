import React from 'react';

const Icon = ({ path, className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const BellIcon = () => <Icon path="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />;
const SearchIcon = () => <Icon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className="h-5 w-5 text-gray-400" />;
const MenuIcon = () => <Icon path="M4 6h16M4 12h16M4 18h16" />;


const Header = ({ onMenuClick }) => {
  return (
    <header className="w-full bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Hamburger Menu Icon for mobile */}
        <button onClick={onMenuClick} className="text-gray-500 md:hidden">
          <MenuIcon />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl ml-4 md:ml-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 bg-gray-100 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right side icons & profile */}
        <div className="flex items-center space-x-4 ml-4">
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <BellIcon />
          </button>
          <a href="#">
            <img
              className="h-9 w-9 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              alt="User avatar"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
