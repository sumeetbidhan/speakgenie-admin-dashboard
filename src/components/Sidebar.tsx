import React from 'react';
import { 
  Home, 
  Trophy, 
  Users, 
  BarChart3, 
  Settings,
  ChevronRight
} from 'lucide-react';
import { NavigationItem } from '../App';

interface SidebarProps {
  activeNav: NavigationItem;
  setActiveNav: (nav: NavigationItem) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeNav, setActiveNav, isOpen, setIsOpen }) => {
  const navigationItems = [
    { id: 'dashboard' as NavigationItem, label: 'Dashboard', icon: Home },
    { id: 'leaderboard' as NavigationItem, label: 'Leaderboard', icon: Trophy },
    { id: 'students' as NavigationItem, label: 'Students', icon: Users },
    { id: 'analytics' as NavigationItem, label: 'Analytics', icon: BarChart3 },
    { id: 'settings' as NavigationItem, label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-primary-700 to-primary-800 text-white z-40">
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-6 border-b border-primary-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">SpeakGenie</h1>
              <p className="text-sm text-primary-200">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`sidebar-link w-full text-left ${
                  activeNav === item.id ? 'active' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* School Admin Section */}
        <div className="p-4 border-t border-primary-600">
          <div className="flex items-center gap-3 p-3 bg-primary-600/20 rounded-lg">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">School Admin</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-primary-200">Greenwood Elementary</p>
                <ChevronRight className="w-3 h-3 text-primary-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 