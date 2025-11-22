import { motion } from 'framer-motion';
import { Header } from '../components/organisms/Header';
import { Shield } from 'lucide-react';

export const Threats: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <Header 
        title="Threat Intelligence" 
        subtitle="Advanced threat analysis and monitoring"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-12 text-center"
      >
        <Shield size={64} className="text-nemesis-accent-cyan mx-auto mb-6 opacity-50" />
        <h2 className="text-2xl font-display font-bold text-gradient-cyber mb-4">
          Threat Intelligence Center
        </h2>
        <p className="text-nemesis-text-secondary font-mono max-w-md mx-auto">
          Advanced threat intelligence features coming soon. This module will provide deep analysis 
          of attack patterns and threat actor profiles.
        </p>
      </motion.div>
    </div>
  );
};
