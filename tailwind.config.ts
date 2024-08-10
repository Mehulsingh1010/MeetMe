import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#0D0D0D', // Darker shade for background
          2: '#1A1A1A', // Slightly lighter dark
          3: '#262626', // For borders or accents
          4: '#333333', // Lightest dark for text
        },
        blue: {
          1: '#007BFF', // Vibrant blue for primary actions
          2: '#0056b3', // Darker blue for hover states
        },
        sky: {
          1: '#D0E8FF', // Light sky blue for subtle highlights
          2: '#A8D1FF', // Medium sky blue for accents
          3: '#87C3FF', // For links or active states
        },
        orange: {
          1: '#FF6F00', // Bright orange for call-to-actions
        },
        purple: {
          1: '#6F42C1', // Rich purple for special elements
        },
        yellow: {
          1: '#F7C600', // Bright yellow for highlights
        },
        gray: {
          100: '#F5F5F5', // Light gray for backgrounds
          200: '#E0E0E0', // Medium gray for borders
          300: '#BDBDBD', // Dark gray for text
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
      // Adjusted text-shadow with a darker color
      textShadow: {
        'outline': '0 0 2px rgba(0, 0, 0, 0.85)', // Darker shadow
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Add a plugin for text-shadow if you have one or use the below inline plugin
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-outline': {
          textShadow: '0 0 2px rgba(0, 0, 0, 0.85)', // Darker shadow
        },
      }, ['responsive', 'hover']);
    }
  ],
} satisfies Config;

export default config;
