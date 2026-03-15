import React from 'react';

export interface AeroBubbleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'blue' | 'lime' | 'sky';
  className?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

const colorClasses = {
  cyan: 'bg-gradient-to-br from-cyan-300/40 to-cyan-500/20',
  blue: 'bg-gradient-to-br from-blue-300/40 to-blue-500/20',
  lime: 'bg-gradient-to-br from-lime-300/40 to-lime-500/20',
  sky: 'bg-gradient-to-br from-sky-300/40 to-sky-500/20',
};

export const AeroBubble: React.FC<AeroBubbleProps> = ({
  size = 'md',
  color = 'cyan',
  className = '',
}) => {
  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        rounded-full
        backdrop-blur-sm
        border border-white/30
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        relative
        overflow-hidden
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full"></div>
      
      <div className="absolute bottom-2 right-2 w-1/3 h-1/3 bg-white/30 rounded-full blur-md"></div>
    </div>
  );
};

export default AeroBubble;
