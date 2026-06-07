/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080810',      // Deep Dark Base
        accent: '#7C6BFF',       // Electric Indigo Accent
        highlight: '#00E5C4',    // Teal Highlight
        secondary: '#F5F5F0',    // Warm Off-White
        darkSurface: '#0F0F1A',  // Bento Cards Dark Surface
        cardBg: 'rgba(15, 15, 26, 0.65)',
        cardBorder: 'rgba(255, 255, 255, 0.05)',
        textMuted: '#9CA3AF'     // Gray text
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(108, 99, 255, 0.2)',
        'glow-strong': '0 0 35px rgba(108, 99, 255, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
