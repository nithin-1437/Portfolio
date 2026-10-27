/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070b14',
          card: '#0d1527',
          surface: '#111c35',
          border: '#1f2e4d',
          accent: '#38bdf8',
          glow: '#0284c7',
          neon: '#00f0ff',
          success: '#10b981',
          warning: '#f59e0b',
          navy: {
            950: '#030712',
            900: '#070f22',
            850: '#0b162f',
            800: '#102043',
            700: '#183161',
            600: '#234789',
            500: '#3466be',
            400: '#60a5fa',
            300: '#93c5fd',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(56, 189, 248, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
