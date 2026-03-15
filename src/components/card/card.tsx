import React from 'react';
import { getGlassClasses, GlassVariantType } from '@/theme/glass';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GlassVariantType;
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

export const Card: React.FC<CardProps> = ({
  variant = 'light',
  padding = 'md',
  enableInteractions = false,
  children,
  className = '',
  ...props
}) => {
  const glassClasses = getGlassClasses(variant, undefined, enableInteractions);
  const paddingClass = paddingClasses[padding];

  return (
    <div
      className={`
        ${glassClasses}
        ${paddingClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
