import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Bug, Lock, Skull } from 'lucide-react';
import type { Threat } from '../../types';
import { Badge } from '../atoms/Badge';
import { formatRelativeTime } from '../../lib/utils';
import { useState } from 'react';

interface ThreatItemProps {
  threat: Threat;
  onAction?: (threatId: string, action: 'block' | 'investigate' | 'archive') => void;
}

export const ThreatItem: React.FC<ThreatItemProps> = ({ threat, onAction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const threatIcons = {
    'DDoS': Shield,
    'Malware': Bug,
    'Phishing': AlertTriangle,
    'Ransomware': Lock,
    'Brute Force': Skull,
  };
  
  const severityColors = {
    Critical: 'border-l-nemesis-accent-magenta',
    High: 'border-l-nemesis-accent-amber',
    Medium: 'border-l-nemesis-accent-violet',
    Low: 'border-l-nemesis-accent-green',
  };
  
  const statusColors = {
    Active: 'text-nemesis-accent-magenta',
    Mitigated: 'text-nemesis-accent-green',
    Investigating: 'text-nemesis-accent-amber',
  };
  
  const ThreatIcon = threatIcons[threat.type];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={`glass-card p-4 border-l-4 ${severityColors[threat.severity]} cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="p-2 bg-nemesis-glass-bg rounded-lg">
            <ThreatIcon size={20} className="text-nemesis-accent-cyan" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-mono text-sm font-semibold text-nemesis-text-primary">
                {threat.type}
              </h4>
              <Badge severity={threat.severity}>{threat.severity}</Badge>
              <span className={`text-xs font-mono ${statusColors[threat.status]}`}>
                {threat.status}
              </span>
            </div>
            
            <p className="text-xs text-nemesis-text-secondary font-mono">
              {threat.sourceCountry} ({threat.sourceIP}) → {threat.targetCountry} ({threat.targetIP})
            </p>
          </div>
        </div>
        
        <span className="text-xs text-nemesis-text-muted font-mono">
          {formatRelativeTime(threat.timestamp)}
        </span>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mt-4 pt-4 border-t border-nemesis-glass-border"
        >
          <p className="text-sm text-nemesis-text-secondary mb-4">
            {threat.description}
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAction?.(threat.id, 'block');
              }}
              className="px-3 py-1 text-xs bg-nemesis-accent-magenta/20 text-nemesis-accent-magenta rounded hover:bg-nemesis-accent-magenta/30 transition-colors"
            >
              Block
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAction?.(threat.id, 'investigate');
              }}
              className="px-3 py-1 text-xs bg-nemesis-accent-amber/20 text-nemesis-accent-amber rounded hover:bg-nemesis-accent-amber/30 transition-colors"
            >
              Investigate
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAction?.(threat.id, 'archive');
              }}
              className="px-3 py-1 text-xs bg-nemesis-glass-bg text-nemesis-text-secondary rounded hover:bg-nemesis-accent-cyan/10 transition-colors"
            >
              Archive
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
