import React from 'react';
import { Home, Trophy, Users, BarChart3, Settings } from 'lucide-react';
import { NavigationItem } from '../App';

interface MobileNavProps {
  activeNav: NavigationItem;
  setActiveNav: (nav: NavigationItem) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeNav, setActiveNav }) => {
  const navigationItems = [
    { id: 'dashboard' as NavigationItem, label: 'Dashboard', icon: Home },
    { id: 'leaderboard' as NavigationItem, label: 'Leaderboard', icon: Trophy },
    { id: 'students' as NavigationItem, label: 'Students', icon: Users },
    { id: 'analytics' as NavigationItem, label: 'Analytics', icon: BarChart3 },
    { id: 'settings' as NavigationItem, label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex flex-col items-center justify-center w-16 py-2 transition-all duration-200 ${
                isActive 
                  ? 'text-primary-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? 'text-primary-600' : 'text-gray-500'}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-primary-600' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav; 