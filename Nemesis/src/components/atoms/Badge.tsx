import { SeverityLevel } from '../../types';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  severity?: SeverityLevel | 'info';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, severity = 'info', className }) => {
  const severityStyles = {
    Critical: 'badge-critical',
    High: 'badge-warning',
    Medium: 'badge-info',
    Low: 'badge-success',
    info: 'badge-info',
  };
  
  return (
    <span className={cn('badge', severityStyles[severity], className)}>
      {children}
    </span>
  );
};
