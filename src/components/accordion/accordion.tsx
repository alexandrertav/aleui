'use client';

import React, { useState } from 'react';
import { getGlassClasses, GlassVariantType } from '@/theme/glass';

export interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  variant?: GlassVariantType;
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  variant = 'light',
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const open = isOpen(item.id);
        const glassClasses = getGlassClasses(variant, 'rounded-none', false);
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <div 
            key={item.id} 
            className={`${glassClasses} ${
              isFirst ? 'rounded-t-lg' : ''
            } ${
              isLast ? 'rounded-b-lg' : ''
            } ${
              !isLast ? 'border-b border-white/10' : ''
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-4 flex items-center justify-between text-left text-white font-medium hover:underline transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                {item.icon && <span className="flex items-center text-base">{item.icon}</span>}
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <svg
                className={`w-4 h-4 shrink-0 transition-transform duration-200 text-white/70 ${
                  open ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-200 ease-in-out ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-0 text-sm text-white/80 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
