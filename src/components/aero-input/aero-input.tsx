import React from 'react';
import { getAeroClasses, AeroVariantType } from '@/theme/glass';

export interface AeroInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: AeroVariantType;
  label?: string;
  fullWidth?: boolean;
}

export const AeroInput: React.FC<AeroInputProps> = ({
  variant = 'light',
  label,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const aeroClasses = getAeroClasses(variant, 'rounded-lg');
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className={`flex flex-col gap-2 ${widthClass}`}>
      {label && (
        <label className="text-white/90 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        className={`
          ${aeroClasses}
          px-4 py-3
          ${widthClass}
          text-white placeholder-white/50
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default AeroInput;
