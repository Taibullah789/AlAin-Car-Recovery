/**
 * Theme Configuration & Design Tokens
 * Centralized design system for consistency across components
 */

export const theme = {
  // Color Palette
  colors: {
    primary: '#fbb033',      // Yellow - Brand color
    primaryHover: '#e39b24', // Darker yellow for hover
    secondary: '#1e293b',    // Dark navy - Professional
    accent: '#0ea5e9',       // Bright blue - Innovation
    success: '#22c55e',      // Green - Positive
    warning: '#f97316',      // Orange - Attention
    error: '#ef4444',        // Red - Error
    bg: '#ffffff',           // Light background
    bgAlt: '#f8fafc',        // Alternate light background
    bgDark: '#0f172a',       // Dark background
    text: '#1e293b',         // Primary text
    textLight: '#64748b',    // Secondary text
    textWhite: '#ffffff',    // Light text
    border: '#e2e8f0',       // Light border
    borderDark: '#334155',   // Dark border
  },

  // Spacing System (8px base)
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
  },

  // Typography
  typography: {
    h1: 'text-5xl md:text-6xl font-bold tracking-tight text-secondary',
    h2: 'text-4xl md:text-5xl font-bold text-secondary',
    h3: 'text-3xl md:text-4xl font-bold text-secondary',
    h4: 'text-2xl md:text-3xl font-bold text-secondary',
    h5: 'text-xl md:text-2xl font-semibold text-secondary',
    h6: 'text-lg md:text-xl font-semibold text-secondary',
    body: 'text-base md:text-lg text-text leading-relaxed',
    bodySmall: 'text-sm md:text-base text-textLight leading-relaxed',
    label: 'text-sm font-semibold uppercase tracking-widest text-secondary',
    caption: 'text-xs md:text-sm text-textLight',
  },

  // Button Styles
  buttons: {
    primary: 'bg-primary hover:bg-primaryHover text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-glow-primary',
    primaryOutline: 'border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold px-6 py-3 rounded-full transition-all duration-300',
    secondary: 'bg-secondary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md',
    secondaryOutline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300',
    ghost: 'text-secondary hover:text-primary font-semibold px-4 py-2 rounded-lg transition-all duration-300',
    small: 'px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300',
    large: 'px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300',
  },

  // Card Styles
  cards: {
    default: 'bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden',
    dark: 'bg-secondary rounded-xl shadow-lg text-white',
    bordered: 'bg-white border-2 border-border rounded-xl',
    elevated: 'bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300',
  },

  // Input Styles
  inputs: {
    default: 'w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 focus:outline-none transition-all duration-300',
    dark: 'w-full px-4 py-3 border-0 bg-secondary text-white rounded-lg placeholder-textLight focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300',
  },

  // Container Styles
  containers: {
    default: 'max-w-7xl mx-auto px-4',
    narrow: 'max-w-4xl mx-auto px-4',
    wide: 'max-w-full mx-auto px-4',
  },

  // Section Styles
  sections: {
    default: 'py-16 md:py-24',
    compact: 'py-12 md:py-16',
    spacious: 'py-20 md:py-32',
  },

  // Gradient Backgrounds
  gradients: {
    primary: 'from-primary to-primaryHover',
    dark: 'from-secondary to-bgDark',
    accent: 'from-accent to-blue-600',
    fade: 'from-secondary via-secondary to-bgDark',
  },

  // Breakpoints (Tailwind defaults)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index Scale
  zIndex: {
    hide: '-10',
    base: '0',
    dropdown: '10',
    sticky: '20',
    fixed: '30',
    overlay: '40',
    modal: '50',
    tooltip: '60',
    notification: '70',
  },

  // Animation Timings
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};

export default theme;
