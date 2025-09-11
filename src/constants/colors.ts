// Mixpanel-inspired color palette for RiditStack
export const RIDITSTACK_COLORS = {
  // Primary Mixpanel colors
  primary: '#9074FF',      // Mixpanel Purple
  primaryDeep: '#5F41CF',  // Deep Purple
  primaryDark: '#472BA0',  // Dark Purple
  primaryDarkest: '#15003F', // Darkest Purple
  
  // Accent colors
  secondary: '#72BEFC',    // Soft Blue
  accent: '#FF7557',       // Coral
  accentSoft: '#7FE1D8',  // Mint Green
  accentWarm: '#FFB276',  // Peach
  
  // Neutrals
  background: '#ffffff',   // White
  backgroundSoft: '#FAFAFA', // Light Gray
  backgroundMuted: '#F4F4F4', // Gray
  foreground: '#1F2023',   // Dark Text
  foregroundMuted: '#797979', // Light Text
  foregroundSubtle: '#A2A2A2', // Subtle Text
  
  // UI colors
  muted: '#F4F4F4',       
  mutedForeground: '#797979',
  border: '#F4F4F4'
} as const;

export const RIDITSTACK_OKLCH_COLORS = {
  // Convert Mixpanel colors to OKLCH for Tailwind CSS v4
  primary: '0.672 0.182 285.15',      // #9074FF
  primaryDeep: '0.516 0.208 285.15',  // #5F41CF
  primaryDark: '0.401 0.156 285.15',  // #472BA0
  primaryDarkest: '0.147 0.083 285.15', // #15003F
  
  secondary: '0.775 0.119 240.12',    // #72BEFC
  accent: '0.696 0.186 32.95',        // #FF7557
  accentSoft: '0.847 0.091 185.47',   // #7FE1D8
  accentWarm: '0.792 0.126 65.85',    // #FFB276
  
  background: '1 0 0',                // #ffffff
  backgroundSoft: '0.984 0 0',        // #FAFAFA
  backgroundMuted: '0.961 0 0',       // #F4F4F4
  foreground: '0.140 0.004 264.05',   // #1F2023
  foregroundMuted: '0.515 0.003 264.05', // #797979
  foregroundSubtle: '0.670 0.002 264.05'  // #A2A2A2
} as const;

// Mixpanel gradient background
export const MIXPANEL_GRADIENT = 'linear-gradient(0deg, #15003f 20%, #472ba0, #9074ff 57.99%, #ffd7cf 70%, #fff 95%)';