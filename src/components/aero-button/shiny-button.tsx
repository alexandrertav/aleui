"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { cn } from '@/utils';

const animation = {
    initial: { "--x": "-100%", scale: 1 },
    animate: { "--x": "-100%", scale: 1 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
    onClick,
    size = 'md',
    fullWidth = false,
    className = '',
    children,
    disabled = false,
}) => {
    const sizeClass = sizeClasses[size];
    const widthClass = fullWidth ? 'w-full' : '';
    
    return (
      <motion.button 
        {...animation}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "relative rounded-xl overflow-hidden font-medium",
          sizeClass,
          widthClass,
          "bg-gradient-to-br from-cyan-400/30 via-blue-400/25 to-cyan-500/30",
          "backdrop-blur-lg border-2 border-cyan-300/40",
          "shadow-[0_0_30px_rgba(0,206,209,0.4),inset_0_0_20px_rgba(255,255,255,0.1)]",
          "hover:shadow-[0_0_50px_rgba(0,206,209,0.6),inset_0_0_30px_rgba(255,255,255,0.2)]",
          "hover:border-cyan-300/60",
          "transition-all duration-300",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          className,
        )}
      >
        {/* Shine effect */}
        <motion.span
          className="absolute inset-0 z-0"
          animate={{
            x: ["0%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            width: "50%",
          }}
        />
        
        {/* Inner glow */}
        <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 z-0" />
        
        {/* Text */}
        <span className="relative z-10 text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {children}
        </span>
      </motion.button>
    );
};