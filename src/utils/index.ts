/**
 * Utility functions for the glassmorphism UI library
 */

/**
 * Combine multiple class names, filtering out falsy values
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Generate random gradient colors for backgrounds
 */
export const getRandomGradient = (): string => {
  const gradients = [
    'from-purple-600 via-pink-500 to-orange-400',
    'from-blue-600 via-cyan-500 to-teal-400',
    'from-pink-500 via-red-500 to-yellow-500',
    'from-indigo-600 via-purple-500 to-pink-500',
    'from-green-500 via-teal-500 to-blue-500',
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
