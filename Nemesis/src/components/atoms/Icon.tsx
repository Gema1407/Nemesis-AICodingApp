import { cn } from '../../lib/utils';

interface IconProps {
  icon: any;
  size?: number;
  className?: string;
  glow?: boolean;
}

export const Icon: React.FC<IconProps> = ({ 
  icon: IconComponent, 
  size = 20, 
  className,
  glow = false 
}) => {
  return (
    <IconComponent 
      size={size} 
      className={cn(
        glow && 'drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]',
        className
      )} 
    />
  );
};
