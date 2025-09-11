/**
 * Font Configuration for RiditStack
 * 
 * Currently using Inter as a substitute for TT Commons Pro.
 * 
 * To implement actual TT Commons Pro:
 * 1. Obtain TT Commons Pro font files (.woff2 format recommended)
 * 2. Place font files in src/fonts/ directory
 * 3. Update layout.tsx to use localFont instead of Inter
 * 4. Ensure proper licensing for TT Commons Pro
 * 
 * TT Commons Pro characteristics:
 * - Modern geometric sans-serif
 * - Excellent readability at all sizes
 * - Clean, professional appearance
 * - Strong brand identity
 */

export const FONT_CONFIG = {
  primary: 'TT Commons Pro',
  substitute: 'Inter',
  fallbacks: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
} as const;

// Font feature settings for optimal typography
export const FONT_FEATURES = {
  default: '"kern" 1, "liga" 1, "clig" 1, "calt" 1',
  headings: '"kern" 1, "liga" 1, "clig" 1, "calt" 1, "case" 1',
  numerals: '"kern" 1, "liga" 1, "tnum" 1'
} as const;