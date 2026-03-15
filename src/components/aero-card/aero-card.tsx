import React from 'react';
import { getAeroClasses, AeroVariantType } from '@/theme/glass';

export interface AeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AeroVariantType;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  enableInteractions?: boolean;
  children: React.ReactNode;
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const AeroCard: React.FC<AeroCardProps> = ({
  variant = 'light',
  padding = 'md',
  enableInteractions = false,
  children,
  className = '',
  ...props
}) => {
  const aeroClasses = getAeroClasses(variant, 'rounded-xl', enableInteractions);
  const paddingClass = paddingClasses[padding];

  return (
    <div
      className={`
        ${aeroClasses}
        ${paddingClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default AeroCard;
