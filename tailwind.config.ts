import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfcf8',
          100: '#faf7ef',
          200: '#f5efde',
        },
        sage: {
          50: '#f4f6f2',
          100: '#e5ebdf',
          200: '#c9d6bd',
          300: '#a6ba94',
          400: '#839c6e',
          500: '#688054',
          600: '#516641',
          700: '#425235',
          800: '#37422d',
          900: '#2f3827',
        },
        blush: {
          50: '#fdf5f3',
          100: '#fbe8e3',
          200: '#f6d0c7',
          300: '#eeab9c',
          400: '#e18570',
          500: '#d06250',
          600: '#bc4a3a',
          700: '#9d3c2f',
          800: '#82342b',
          900: '#6d3029',
        },
        plum: {
          50: '#faf7f9',
          100: '#f3ecf1',
          200: '#e7d8e2',
          300: '#d0b3c7',
          400: '#b287a2',
          500: '#966583',
          600: '#7d526b',
          700: '#634257',
          800: '#533949',
          900: '#47343f',
        },
        charcoal: {
          DEFAULT: '#1f1d1a',
          soft: '#2b2926',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-italianno)', 'cursive'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
