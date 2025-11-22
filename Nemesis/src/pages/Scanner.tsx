import { motion } from 'framer-motion';
import { Header } from '../components/organisms/Header';
import { Activity } from 'lucide-react';

export const Scanner: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <Header 
        title="Vulnerability Scanner" 
        subtitle="Automated security scanning and assessment"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-12 text-center"
      >
        <Activity size={64} className="text-nemesis-accent-violet mx-auto mb-6 opacity-50" />
        <h2 className="text-2xl font-display font-bold text-gradient-cyber mb-4">
          Vulnerability Scanner
        </h2>
        <p className="text-nemesis-text-secondary font-mono max-w-md mx-auto">
          Comprehensive vulnerability scanning features coming soon. Schedule automated scans 
          and receive detailed remediation recommendations.
        </p>
      </motion.div>
    </div>
  );
};
