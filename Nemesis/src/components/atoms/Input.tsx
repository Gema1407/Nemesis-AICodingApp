import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-nemesis-text-secondary mb-2">
          {label}
        </label>
      )}
      <input
        className={cn('input-field', error && 'border-nemesis-accent-magenta', className)}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-nemesis-accent-magenta">{error}</p>
      )}
    </div>
  );
};
