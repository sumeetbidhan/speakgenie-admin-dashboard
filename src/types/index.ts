// Export all component types
export type NavigationItem = 'dashboard' | 'leaderboard' | 'students' | 'analytics' | 'settings';

// Re-export components for better module resolution
export { default as Dashboard } from '../components/Dashboard';
export { default as Leaderboard } from '../components/Leaderboard';
export { default as Students } from '../components/Students';
export { default as Analytics } from '../components/Analytics';
export { default as Settings } from '../components/Settings';
export { default as Sidebar } from '../components/Sidebar';
export { default as MobileNav } from '../components/MobileNav'; 