import React from 'react';
import { getAeroClasses, AeroVariantType } from '@/theme/glass';

export interface AeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AeroVariantType;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const AeroButton: React.FC<AeroButtonProps> = ({
  variant = 'light',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  disabled = false,
  ...props
}) => {
  const aeroClasses = getAeroClasses(variant, 'rounded-lg');
  const sizeClass = sizeClasses[size];
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`
        ${aeroClasses}
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

export default AeroButton;
