import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Shield, Bell, Database, Download, Upload, Check } from 'lucide-react';

const Settings: React.FC = () => {
  const [profileData, setProfileData] = useState({
    fullName: 'Admin User',
    email: 'admin@example.com',
    phone: '+1-555-0123'
  });

  const [systemSettings, setSystemSettings] = useState({
    defaultLanguage: 'English',
    timeZone: 'UTC-5 (Eastern Time)'
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    performanceReports: true,
    newSchoolAlerts: false
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic
    console.log('Profile updated:', profileData);
  };

  const handleSystemUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle system settings update logic
    console.log('System settings updated:', systemSettings);
  };

  const handleNotificationToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleExport = (type: string) => {
    // Handle export logic
    console.log(`Exporting ${type}`);
  };

  const handleBackup = () => {
    // Handle backup logic
    console.log('Creating backup...');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <SettingsIcon className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="chart-card">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-6 h-6 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Profile Settings</h2>
          </div>
          <p className="text-gray-600 mb-6">Update your personal information and contact details</p>
          
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={profileData.fullName}
                onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                className="input-field"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                className="input-field"
                placeholder="Enter your phone number"
              />
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Update Profile
            </button>
          </form>
        </div>

        {/* System Settings */}
        <div className="chart-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">System Settings</h2>
          </div>
          <p className="text-gray-600 mb-6">Configure system preferences and default options</p>
          
          <form onSubmit={handleSystemUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Language
              </label>
              <select
                value={systemSettings.defaultLanguage}
                onChange={(e) => setSystemSettings(prev => ({ ...prev, defaultLanguage: e.target.value }))}
                className="dropdown"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Hindi</option>
                <option>Chinese</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Zone
              </label>
              <select
                value={systemSettings.timeZone}
                onChange={(e) => setSystemSettings(prev => ({ ...prev, timeZone: e.target.value }))}
                className="dropdown"
              >
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-6 (Central Time)</option>
                <option>UTC-7 (Mountain Time)</option>
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC+0 (GMT)</option>
                <option>UTC+1 (Central European Time)</option>
                <option>UTC+5:30 (India Standard Time)</option>
              </select>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Save Settings
            </button>
          </form>
        </div>

        {/* Notification Preferences */}
        <div className="chart-card">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-6 h-6 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
          </div>
          <p className="text-gray-600 mb-6">Manage how and when you receive notifications</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <button
                onClick={() => handleNotificationToggle('emailNotifications')}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  notifications.emailNotifications 
                    ? 'bg-primary-600 border-primary-600' 
                    : 'bg-white border-gray-300'
                }`}
              >
                {notifications.emailNotifications && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Performance Reports</h3>
                <p className="text-sm text-gray-600">Weekly performance summaries</p>
              </div>
              <button
                onClick={() => handleNotificationToggle('performanceReports')}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  notifications.performanceReports 
                    ? 'bg-primary-600 border-primary-600' 
                    : 'bg-white border-gray-300'
                }`}
              >
                {notifications.performanceReports && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">New School Alerts</h3>
                <p className="text-sm text-gray-600">Notifications for new school registrations</p>
              </div>
              <button
                onClick={() => handleNotificationToggle('newSchoolAlerts')}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  notifications.newSchoolAlerts 
                    ? 'bg-primary-600 border-primary-600' 
                    : 'bg-white border-gray-300'
                }`}
              >
                {notifications.newSchoolAlerts && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="chart-card">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Data Management</h2>
          </div>
          <p className="text-gray-600 mb-6">Export data and manage system backups</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Export Data</h3>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => handleExport('student')}
                  className="btn-secondary flex items-center gap-2 justify-center"
                >
                  <Download className="w-4 h-4" />
                  Export Student Data
                </button>
                <button
                  onClick={() => handleExport('school')}
                  className="btn-secondary flex items-center gap-2 justify-center"
                >
                  <Download className="w-4 h-4" />
                  Export School Reports
                </button>
                <button
                  onClick={() => handleExport('analytics')}
                  className="btn-secondary flex items-center gap-2 justify-center"
                >
                  <Download className="w-4 h-4" />
                  Export Analytics
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Backup</h3>
              <button
                onClick={handleBackup}
                className="btn-secondary flex items-center gap-2 justify-center w-full"
              >
                <Upload className="w-4 h-4" />
                Create Backup
              </button>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Last backup: March 15, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 