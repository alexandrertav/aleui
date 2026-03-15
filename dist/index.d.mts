import React from 'react';

declare const glassVariants: {
    readonly light: {
        readonly background: "bg-white/5";
        readonly backdropBlur: "backdrop-blur-[2px]";
        readonly border: "border border-white/15";
        readonly shadow: "shadow-lg";
        readonly hover: "hover:bg-white/10 hover:shadow-xl";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-white/10";
    };
    readonly medium: {
        readonly background: "bg-white/20";
        readonly backdropBlur: "backdrop-blur-lg";
        readonly border: "border border-white/30";
        readonly shadow: "shadow-xl";
        readonly hover: "hover:bg-white/30 hover:shadow-2xl";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-white/50";
    };
    readonly dark: {
        readonly background: "bg-black/20";
        readonly backdropBlur: "backdrop-blur-md";
        readonly border: "border border-white/10";
        readonly shadow: "shadow-lg";
        readonly hover: "hover:bg-black/30 hover:shadow-xl";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-white/40";
    };
    readonly colored: {
        readonly background: "bg-gradient-to-br from-white/20 to-white/10";
        readonly backdropBlur: "backdrop-blur-xl";
        readonly border: "border border-white/25";
        readonly shadow: "shadow-2xl";
        readonly hover: "hover:from-white/30 hover:to-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.37)]";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-white/60";
    };
};
declare const aeroVariants: {
    readonly light: {
        readonly background: "bg-gradient-to-br from-cyan-400/20 to-blue-400/10";
        readonly backdropBlur: "backdrop-blur-md";
        readonly border: "border border-cyan-300/30";
        readonly shadow: "shadow-aero";
        readonly hover: "hover:from-cyan-400/30 hover:to-blue-400/20 hover:shadow-aero-lg";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-cyan-300/50";
    };
    readonly medium: {
        readonly background: "bg-gradient-to-br from-sky-400/25 to-cyan-400/15";
        readonly backdropBlur: "backdrop-blur-lg";
        readonly border: "border border-sky-300/40";
        readonly shadow: "shadow-aero-lg";
        readonly hover: "hover:from-sky-400/35 hover:to-cyan-400/25 hover:shadow-[0_8px_32px_0_rgba(56,189,248,0.37)]";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-sky-300/60";
    };
    readonly dark: {
        readonly background: "bg-gradient-to-br from-blue-500/30 to-cyan-500/20";
        readonly backdropBlur: "backdrop-blur-md";
        readonly border: "border border-blue-300/30";
        readonly shadow: "shadow-aero";
        readonly hover: "hover:from-blue-500/40 hover:to-cyan-500/30 hover:shadow-aero-lg";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-blue-300/50";
    };
    readonly colored: {
        readonly background: "bg-gradient-to-br from-lime-400/25 via-cyan-400/20 to-blue-400/15";
        readonly backdropBlur: "backdrop-blur-xl";
        readonly border: "border border-lime-300/35";
        readonly shadow: "shadow-aero-lg";
        readonly hover: "hover:from-lime-400/35 hover:via-cyan-400/30 hover:to-blue-400/25 hover:shadow-[0_8px_32px_0_rgba(163,230,53,0.37)]";
        readonly focus: "focus:outline-none focus:ring-2 focus:ring-lime-300/60";
    };
};
type GlassVariantType = keyof typeof glassVariants;
type AeroVariantType = keyof typeof aeroVariants;
/**
 * Generate glassmorphism class string
 */
declare const getGlassClasses: (variant?: GlassVariantType, rounded?: string, includeInteractions?: boolean) => string;
/**
 * Generate Frutiger Aero class string
 */
declare const getAeroClasses: (variant?: AeroVariantType, rounded?: string, includeInteractions?: boolean) => string;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: GlassVariantType;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: GlassVariantType;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    enableInteractions?: boolean;
    children: React.ReactNode;
}
declare const Card: React.FC<CardProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: GlassVariantType;
    fullWidth?: boolean;
    label?: string;
}
declare const Input: React.FC<InputProps>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    variant?: GlassVariantType;
    title?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
declare const Modal: React.FC<ModalProps>;

interface AeroBubbleProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    color?: 'cyan' | 'blue' | 'lime' | 'sky';
    className?: string;
}
declare const AeroBubble: React.FC<AeroBubbleProps>;

interface AccordionItemProps {
    id: string;
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}
interface AccordionProps {
    items: AccordionItemProps[];
    variant?: GlassVariantType;
    allowMultiple?: boolean;
    defaultOpen?: string[];
    className?: string;
}
declare const Accordion: React.FC<AccordionProps>;

export { Accordion, type AccordionItemProps, type AccordionProps, AeroBubble, type AeroBubbleProps, type AeroVariantType, Button, type ButtonProps, Card, type CardProps, type GlassVariantType, Input, type InputProps, Modal, type ModalProps, aeroVariants, getAeroClasses, getGlassClasses, glassVariants };
