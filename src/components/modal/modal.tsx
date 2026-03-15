import React from 'react';
import { getGlassClasses, GlassVariantType } from '@/theme/glass';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: GlassVariantType;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  variant = 'medium',
  title,
  children,
  size = 'md',
}) => {
  if (!isOpen) return null;

  const glassClasses = getGlassClasses(variant);
  const sizeClass = sizeClasses[size];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className={`
          ${glassClasses}
          ${sizeClass}
          w-full p-6 relative z-10
          animate-scaleIn
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
