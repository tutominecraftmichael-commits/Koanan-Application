import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'glow';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:translate-y-0.5';

    const variants = {
      primary: 'bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/40 shadow-[0_4px_0_0_#3730A3] active:shadow-[0_2px_0_0_#3730A3] font-extrabold',
      glow: 'bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white border border-blue-400/40 shadow-[0_4px_0_0_#1e3a8a] active:shadow-[0_2px_0_0_#1e3a8a] font-extrabold',
      secondary: 'bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-200 shadow-[0_3px_0_0_#cbd5e1] active:shadow-[0_1px_0_0_#cbd5e1] dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 dark:shadow-[0_3px_0_0_#0f172a] dark:active:shadow-[0_1px_0_0_#0f172a] font-bold',
      outline: 'bg-transparent border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-[0_3px_0_0_#cbd5e1] active:shadow-[0_1px_0_0_#cbd5e1] dark:border-slate-700 dark:hover:border-blue-500/60 dark:text-slate-200 dark:hover:bg-blue-500/10 dark:hover:text-white dark:shadow-[0_3px_0_0_#0f172a]',
      ghost: 'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 dark:hover:bg-slate-800/60 dark:text-slate-300 dark:hover:text-white',
      danger: 'bg-rose-600 hover:bg-rose-500 text-white border border-rose-400/40 shadow-[0_4px_0_0_#9f1239] active:shadow-[0_2px_0_0_#9f1239] font-extrabold',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
      md: 'text-sm px-4 py-2.5 rounded-xl gap-2',
      lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold',
      icon: 'p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
