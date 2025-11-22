import { motion, AnimatePresence } from 'framer-motion';
import { Home, Shield, Activity, Settings, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { NavItem } from '../molecules/NavItem';
import { useAppStore } from '../../store/useAppStore';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const { sidebarOpen, toggleSidebar, user } = useAppStore();
  
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'threats', icon: Shield, label: 'Threats' },
    { id: 'scanner', icon: Activity, label: 'Scanner' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];
  
  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarOpen ? 280 : 80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen glass-card rounded-none border-r border-nemesis-glass-border flex flex-col relative"
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-nemesis-glass-border">
        <motion.div
          className="flex items-center gap-3"
          initial={false}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nemesis-accent-cyan to-nemesis-accent-violet flex items-center justify-center">
            <Shield size={24} className="text-white animate-pulse-slow" />
          </div>
          
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.h1
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-2xl font-display font-bold text-gradient-cyber whitespace-nowrap"
              >
                Nemesis
              </motion.h1>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={currentPage === item.id}
            onClick={() => onNavigate(item.id)}
            collapsed={!sidebarOpen}
          />
        ))}
      </nav>
      
      {/* User Section */}
      <div className="p-4 border-t border-nemesis-glass-border">
        <AnimatePresence mode="wait">
          {sidebarOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card p-3"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nemesis-accent-violet to-nemesis-accent-magenta flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {user?.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-nemesis-text-primary truncate">
                    {user?.name}
                  </p>
                  <p className="text-xs text-nemesis-text-muted truncate">
                    {user?.role}
                  </p>
                </div>
              </div>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-nemesis-accent-magenta hover:bg-nemesis-accent-magenta/10 rounded-lg transition-colors">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-nemesis-accent-violet to-nemesis-accent-magenta flex items-center justify-center cursor-pointer"
            >
              <span className="text-white font-bold text-sm">
                {user?.name.charAt(0)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-4 top-6 w-8 h-8 glass-card rounded-full flex items-center justify-center hover:shadow-glow-cyan transition-all"
      >
        {sidebarOpen ? (
          <ChevronLeft size={16} className="text-nemesis-accent-cyan" />
        ) : (
          <ChevronRight size={16} className="text-nemesis-accent-cyan" />
        )}
      </button>
    </motion.aside>
  );
};
