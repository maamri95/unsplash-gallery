import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: NodeJS.Timeout
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), waitFor)
  } as F
}