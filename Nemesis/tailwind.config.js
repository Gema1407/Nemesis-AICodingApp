/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nemesis: {
          bg: {
            primary: '#0A0E27',
            secondary: '#151932',
            tertiary: '#1A1F3A',
          },
          accent: {
            cyan: '#00F0FF',
            violet: '#8B5CF6',
            magenta: '#FF0080',
            green: '#00FF88',
            amber: '#FFB800',
          },
          text: {
            primary: '#E0E7FF',
            secondary: '#8B92B8',
            muted: '#6B7280',
          },
          glass: {
            bg: 'rgba(255, 255, 255, 0.05)',
            border: 'rgba(0, 240, 255, 0.2)',
          },
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-cyan-lg': '0 0 40px rgba(0, 240, 255, 0.4)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-violet-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
        'glow-magenta': '0 0 20px rgba(255, 0, 128, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
