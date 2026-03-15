import React from 'react';
import { getGlassClasses, GlassVariantType } from '@/theme/glass';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: GlassVariantType;
  fullWidth?: boolean;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  variant = 'light',
  fullWidth = false,
  label,
  className = '',
  id,
  ...props
}) => {
  const glassClasses = getGlassClasses(variant);
  const widthClass = fullWidth ? 'w-full' : '';
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`flex flex-col gap-2 ${widthClass}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-white text-sm font-medium pl-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          ${glassClasses}
          ${widthClass}
          px-4 py-3
          text-white placeholder-white/50
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white/50
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
