/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core System Colors */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* gray-900 */
        border: 'var(--color-border)', /* gray-200 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* blue-500 */
        
        /* Card & Surface Colors */
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)' /* gray-900 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* gray-900 */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-50 */
          foreground: 'var(--color-muted-foreground)' /* gray-500 */
        },
        
        /* Brand Primary Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', /* red-600 */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* blue-500 */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        
        /* State Colors */
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-600 */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* emerald-500 */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-600 */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-600 */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-600 */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        
        /* Brand Specific Colors */
        'life-force': 'var(--color-life-force)', /* red-600 */
        'trust-blue': 'var(--color-trust-blue)', /* blue-500 */
        'success-green': 'var(--color-success-green)', /* emerald-500 */
        'surface': 'var(--color-surface)', /* gray-50 */
        'text-primary': 'var(--color-text-primary)', /* gray-900 */
        'text-secondary': 'var(--color-text-secondary)', /* gray-500 */
        'cta-deep': 'var(--color-cta-deep)' /* red-700 */
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'impact': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'value': ['1.25rem', { lineHeight: '1.4' }]
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
        'bold': '700'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'brand': '8px',
        'brand-sm': '4px',
        'brand-lg': '12px',
        'brand-xl': '16px'
      },
      boxShadow: {
        'brand': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'brand-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'brand-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'brand-xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        'glow-red': '0 0 20px rgba(220, 38, 38, 0.2)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.2)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.2)'
      },
      animation: {
        'hero-pulse': 'hero-pulse 4s ease-in-out infinite',
        'counter-glow': 'counter-glow 2.5s ease-out forwards',
        'emergency-pulse': 'emergency-pulse 1.5s ease-in-out infinite',
        'slide-in-bottom': 'slide-in-bottom 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      keyframes: {
        'hero-pulse': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)', opacity: '1' },
          '50%': { transform: 'translate3d(0, -2px, 0) scale(1.02)', opacity: '0.95' }
        },
        'counter-glow': {
          '0%': { color: '#6B7280', transform: 'scale(1)' },
          '50%': { color: '#DC2626', transform: 'scale(1.05)' },
          '100%': { color: '#DC2626', transform: 'scale(1)' }
        },
        'emergency-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(220, 38, 38, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(220, 38, 38, 0)' }
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slideUp': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'scaleIn': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      backdropBlur: {
        'brand': '8px'
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'toast': '110'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ],
}