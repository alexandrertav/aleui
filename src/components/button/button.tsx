import React from 'react';
import { getGlassClasses, GlassVariantType } from '@/theme/glass';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassVariantType;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};


export const Button: React.FC<ButtonProps> = ({
  variant = 'light',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  disabled = false,
  ...props
}) => {
  const glassClasses = getGlassClasses(variant);
  const sizeClass = sizeClasses[size];
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`
        ${glassClasses}
        ${sizeClass}
        ${widthClass}
        ${disabledClass}
        font-medium text-white
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
