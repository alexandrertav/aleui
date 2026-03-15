/**
 * Glassmorphism Theme Configuration
 * Define reusable glassmorphism styles and variants
 */

export interface GlassVariant {
  background: string;
  backdropBlur: string;
  border: string;
  shadow: string;
  hover: string;
  focus: string;
}

export interface AeroVariant {
  background: string;
  backdropBlur: string;
  border: string;
  shadow: string;
  hover: string;
  focus: string;
}

// Traditional Glassmorphism styles
export const glassVariants = {
  light: {
    background: 'bg-white/5',
    backdropBlur: 'backdrop-blur-[2px]',
    border: 'border border-white/15',
    shadow: 'shadow-lg',
    hover: 'hover:bg-white/10 hover:shadow-xl',
    focus: 'focus:outline-none focus:ring-2 focus:ring-white/10',
  },
  medium: {
    background: 'bg-white/20',
    backdropBlur: 'backdrop-blur-lg',
    border: 'border border-white/30',
    shadow: 'shadow-xl',
    hover: 'hover:bg-white/30 hover:shadow-2xl',
    focus: 'focus:outline-none focus:ring-2 focus:ring-white/50',
  },
  dark: {
    background: 'bg-black/20',
    backdropBlur: 'backdrop-blur-md',
    border: 'border border-white/10',
    shadow: 'shadow-lg',
    hover: 'hover:bg-black/30 hover:shadow-xl',
    focus: 'focus:outline-none focus:ring-2 focus:ring-white/40',
  },
  colored: {
    background: 'bg-gradient-to-br from-white/20 to-white/10',
    backdropBlur: 'backdrop-blur-xl',
    border: 'border border-white/25',
    shadow: 'shadow-2xl',
    hover: 'hover:from-white/30 hover:to-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.37)]',
    focus: 'focus:outline-none focus:ring-2 focus:ring-white/60',
  },
} as const;

// Frutiger Aero specific styles
export const aeroVariants = {
  light: {
    background: 'bg-gradient-to-br from-cyan-400/20 to-blue-400/10',
    backdropBlur: 'backdrop-blur-md',
    border: 'border border-cyan-300/30',
    shadow: 'shadow-aero',
    hover: 'hover:from-cyan-400/30 hover:to-blue-400/20 hover:shadow-aero-lg',
    focus: 'focus:outline-none focus:ring-2 focus:ring-cyan-300/50',
  },
  medium: {
    background: 'bg-gradient-to-br from-sky-400/25 to-cyan-400/15',
    backdropBlur: 'backdrop-blur-lg',
    border: 'border border-sky-300/40',
    shadow: 'shadow-aero-lg',
    hover: 'hover:from-sky-400/35 hover:to-cyan-400/25 hover:shadow-[0_8px_32px_0_rgba(56,189,248,0.37)]',
    focus: 'focus:outline-none focus:ring-2 focus:ring-sky-300/60',
  },
  dark: {
    background: 'bg-gradient-to-br from-blue-500/30 to-cyan-500/20',
    backdropBlur: 'backdrop-blur-md',
    border: 'border border-blue-300/30',
    shadow: 'shadow-aero',
    hover: 'hover:from-blue-500/40 hover:to-cyan-500/30 hover:shadow-aero-lg',
    focus: 'focus:outline-none focus:ring-2 focus:ring-blue-300/50',
  },
  colored: {
    background: 'bg-gradient-to-br from-lime-400/25 via-cyan-400/20 to-blue-400/15',
    backdropBlur: 'backdrop-blur-xl',
    border: 'border border-lime-300/35',
    shadow: 'shadow-aero-lg',
    hover: 'hover:from-lime-400/35 hover:via-cyan-400/30 hover:to-blue-400/25 hover:shadow-[0_8px_32px_0_rgba(163,230,53,0.37)]',
    focus: 'focus:outline-none focus:ring-2 focus:ring-lime-300/60',
  },
} as const;

export type GlassVariantType = keyof typeof glassVariants;
export type AeroVariantType = keyof typeof aeroVariants;

/**
 * Generate glassmorphism class string
 */
export const getGlassClasses = (
  variant: GlassVariantType = 'light',
  rounded: string = 'rounded-xl',
  includeInteractions: boolean = true
): string => {
  const v = glassVariants[variant];
  const interactions = includeInteractions ? `transition-all duration-300 ${v.hover} ${v.focus} active:scale-95` : '';
  return `${v.background} ${v.backdropBlur} ${v.border} ${v.shadow} ${rounded} ${interactions}`;
};

/**
 * Generate Frutiger Aero class string
 */
export const getAeroClasses = (
  variant: AeroVariantType = 'light',
  rounded: string = 'rounded-xl',
  includeInteractions: boolean = true
): string => {
  const v = aeroVariants[variant];
  const interactions = includeInteractions ? `transition-all duration-300 ${v.hover} ${v.focus} active:scale-95` : '';
  return `${v.background} ${v.backdropBlur} ${v.border} ${v.shadow} ${rounded} ${interactions}`;
};

