import { motion } from 'framer-motion';
import { Header } from '../components/organisms/Header';
import { Settings as SettingsIcon } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <Header 
        title="Settings" 
        subtitle="Configure system preferences and security policies"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-12 text-center"
      >
        <SettingsIcon size={64} className="text-nemesis-accent-green mx-auto mb-6 opacity-50" />
        <h2 className="text-2xl font-display font-bold text-gradient-cyber mb-4">
          System Settings
        </h2>
        <p className="text-nemesis-text-secondary font-mono max-w-md mx-auto">
          Advanced configuration options coming soon. Customize notification preferences, 
          security policies, and integration settings.
        </p>
      </motion.div>
    </div>
  );
};
