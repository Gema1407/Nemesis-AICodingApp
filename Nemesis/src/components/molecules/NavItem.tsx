import { motion } from 'framer-motion';
import { Icon } from '../atoms/Icon';
import { cn } from '../../lib/utils';

interface NavItemProps {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  active = false, 
  onClick,
  collapsed = false 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
        'hover:bg-nemesis-accent-cyan/10 hover:shadow-glow-cyan',
        active && 'bg-nemesis-accent-cyan/20 shadow-glow-cyan',
        collapsed && 'justify-center'
      )}
      whileHover={{ x: collapsed ? 0 : 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon 
        icon={icon} 
        size={20} 
        className={active ? 'text-nemesis-accent-cyan' : 'text-nemesis-text-secondary'}
        glow={active}
      />
      
      {!collapsed && (
        <span className={cn(
          'font-mono text-sm transition-colors',
          active ? 'text-nemesis-accent-cyan font-semibold' : 'text-nemesis-text-secondary'
        )}>
          {label}
        </span>
      )}
      
      {active && !collapsed && (
        <motion.div
          layoutId="activeNav"
          className="ml-auto w-2 h-2 rounded-full bg-nemesis-accent-cyan"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};
