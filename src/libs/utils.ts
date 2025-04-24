import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ! Important: This function supports for
// https://ui.shadcn.com
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
