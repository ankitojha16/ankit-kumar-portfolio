/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          void: '#070509',
          dark: '#0b080c',
          card: '#120d18',
          cardHover: '#1a1324',
          border: 'rgba(194, 164, 255, 0.12)',
          borderHover: 'rgba(194, 164, 255, 0.35)',
          lavender: '#c2a4ff',
          neon: '#a87cff',
          violet: '#7c3aed',
          cyan: '#38bdf8',
          text: '#eae5ec',
          muted: '#9ca3af',
          dim: '#6b7280'
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(194, 164, 255, 0.15)',
        'glow-md': '0 0 30px rgba(194, 164, 255, 0.25)',
        'glow-lg': '0 0 60px rgba(168, 124, 255, 0.35)',
        'glow-neon': '0 0 20px rgba(168, 124, 255, 0.5), 0 0 40px rgba(124, 58, 237, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'orbit-1': 'orbit1 25s linear infinite',
        'orbit-2': 'orbit2 35s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        orbit1: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
