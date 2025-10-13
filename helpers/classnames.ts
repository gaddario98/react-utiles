import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility per combinare classi Tailwind in modo sicuro
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
