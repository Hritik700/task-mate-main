import React, { useState, useEffect, Fragment } from 'react';
import { TaskContextProvider } from './store/TaskContext';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("theme", newTheme);
  };



  // --------------------------
  // 🔥 Load user from LocalStorage
  // --------------------------
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // --------------------------
  // Update user profile
  // (Will be used in Settings page later)
  // --------------------------
  const updateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <TaskContextProvider>
      <Fragment>
        <div className="relative flex h-screen bg-gray-100 dark:bg-gray-900 font-sans transition-all">


          {/* Sidebar now receives user */}
          <SideBar 
            activePage={activePage}
            onNavigate={handleNavigate}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
            user={user}
          />

          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Header now receives user */}
            <Header 
              onMenuClick={() => setIsSidebarOpen(true)}
              user={user}
            />

            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {activePage === 'Dashboard' && <Dashboard />}
              {activePage === 'Tasks' && <TasksPage />}
              {activePage === 'Analytics' && <AnalyticsPage />}
              {activePage === 'Settings' && (
                <SettingsPage updateUser={updateUser} user={user} theme={theme} toggleTheme={toggleTheme} />

              )}
            </main>
          </div>
        </div>
      </Fragment>
    </TaskContextProvider>
  );
}

export default App;
