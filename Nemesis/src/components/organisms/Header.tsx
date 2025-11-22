import { Bell, Search, Wifi, WifiOff } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const { isConnected } = useAppStore();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <header className="glass-card p-4 mb-6">
      <div className="flex items-center justify-between">
        {/* Title Section */}
        <div>
          <h1 className="text-3xl font-display font-bold text-gradient-cyber mb-1">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-nemesis-text-secondary font-mono">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search threats..."
              className="w-64 pl-10 pr-4 py-2 bg-nemesis-glass-bg backdrop-blur-glass border border-nemesis-glass-border rounded-lg text-sm text-nemesis-text-primary font-mono focus:outline-none focus:border-nemesis-accent-cyan transition-colors"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-nemesis-text-muted" />
          </div>
          
          {/* Time */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 glass-card">
            <div className="w-2 h-2 rounded-full bg-nemesis-accent-green animate-pulse" />
            <span className="text-sm font-mono text-nemesis-text-secondary">
              {currentTime.toLocaleTimeString()}
            </span>
          </div>
          
          {/* Connection Status */}
          <motion.div
            className={`flex items-center gap-2 px-4 py-2 glass-card ${
              isConnected ? 'border-nemesis-accent-green/50' : 'border-nemesis-accent-magenta/50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {isConnected ? (
              <>
                <Wifi size={16} className="text-nemesis-accent-green" />
                <span className="text-xs font-mono text-nemesis-accent-green hidden sm:inline">
                  Connected
                </span>
              </>
            ) : (
              <>
                <WifiOff size={16} className="text-nemesis-accent-magenta" />
                <span className="text-xs font-mono text-nemesis-accent-magenta hidden sm:inline">
                  Offline
                </span>
              </>
            )}
          </motion.div>
          
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 glass-card hover:shadow-glow-cyan transition-shadow"
          >
            <Bell size={20} className="text-nemesis-accent-cyan" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-nemesis-accent-magenta rounded-full border-2 border-nemesis-bg-primary" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};
