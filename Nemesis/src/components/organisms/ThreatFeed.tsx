import { motion, AnimatePresence } from 'framer-motion';
import { ThreatItem } from '../molecules/ThreatItem';
import { useAppStore } from '../../store/useAppStore';
import { AlertCircle, Shield } from 'lucide-react';

export const ThreatFeed: React.FC = () => {
  const { threats, updateThreatStatus } = useAppStore();
  
  const handleThreatAction = (threatId: string, action: 'block' | 'investigate' | 'archive') => {
    if (action === 'block') {
      updateThreatStatus(threatId, 'Mitigated');
    } else if (action === 'investigate') {
      updateThreatStatus(threatId, 'Investigating');
    }
  };
  
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <AlertCircle size={24} className="text-nemesis-accent-cyan" />
          <h2 className="text-xl font-display font-bold text-nemesis-text-primary">
            Live Attack Feed
          </h2>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-nemesis-accent-green animate-pulse" />
          <span className="text-xs font-mono text-nemesis-text-secondary">
            Real-time
          </span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        <AnimatePresence initial={false}>
          {threats.length > 0 ? (
            threats.map((threat) => (
              <ThreatItem
                key={threat.id}
                threat={threat}
                onAction={handleThreatAction}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Shield size={48} className="text-nemesis-text-muted mx-auto mb-4 opacity-50" />
              <p className="text-nemesis-text-secondary font-mono">
                No threats detected. System secure.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


