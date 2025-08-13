import React, { useState } from 'react';
import { Sidebar, Dashboard, Leaderboard, Students, Analytics, Settings, MobileNav } from './components';
import { NavigationItem } from './types';

function App() {
  const [activeNav, setActiveNav] = useState<NavigationItem>('dashboard');
  // Removed unused isSidebarOpen state since it's not needed

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return <Dashboard />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'students':
        return <Students />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar 
          activeNav={activeNav} 
          setActiveNav={setActiveNav}
          isOpen={true}
          setIsOpen={() => {}} // Empty function since we don't need to track sidebar state
        />
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 transition-all duration-300">
        <div className="p-4 lg:p-6 pb-20 lg:pb-6">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <MobileNav 
          activeNav={activeNav} 
          setActiveNav={setActiveNav}
        />
      </div>
    </div>
  );
}

export default App; 