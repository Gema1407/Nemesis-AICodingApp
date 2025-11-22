import { motion } from 'framer-motion';
import { Icon } from '../atoms/Icon';
import { formatNumber } from '../../lib/utils';
import { useEffect, useState } from 'react';

interface StatCardProps {
  title: string;
  value: number;
  icon: any;
  color: 'cyan' | 'violet' | 'magenta' | 'green';
  trend?: number;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color,
  trend,
  delay = 0 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  // Animate number counting up
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);
  
  const colorClasses = {
    cyan: 'from-nemesis-accent-cyan/20 to-transparent',
    violet: 'from-nemesis-accent-violet/20 to-transparent',
    magenta: 'from-nemesis-accent-magenta/20 to-transparent',
    green: 'from-nemesis-accent-green/20 to-transparent',
  };
  
  const iconColors = {
    cyan: 'text-nemesis-accent-cyan',
    violet: 'text-nemesis-accent-violet',
    magenta: 'text-nemesis-accent-magenta',
    green: 'text-nemesis-accent-green',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="stat-card group cursor-pointer"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[color]}`}>
            <Icon icon={icon} size={24} className={iconColors[color]} glow />
          </div>
          
          {trend !== undefined && (
            <span className={`text-sm font-mono ${trend >= 0 ? 'text-nemesis-accent-green' : 'text-nemesis-accent-magenta'}`}>
              {trend >= 0 ? '+' : ''}{trend}%
            </span>
          )}
        </div>
        
        <h3 className="text-3xl font-bold font-display mb-2 text-gradient-cyber">
          {formatNumber(displayValue)}
        </h3>
        
        <p className="text-sm text-nemesis-text-secondary font-mono uppercase tracking-wide">
          {title}
        </p>
      </div>
    </motion.div>
  );
};
