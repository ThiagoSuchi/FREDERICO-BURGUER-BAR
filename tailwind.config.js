/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        frederico: {
          black: '#0a0a0a',
          dark: '#121212',
          gray: '#1f1f1f',
          lightGray: '#333333',
          yellow: '#FFD60A',
          red: '#E63946',
          white: '#F4F4F5',
        }
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'vs-spring': 'vs-spring 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        'vs-spring': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 15px rgba(255, 214, 10, 0.6))' },
          '50%': { opacity: .8, filter: 'drop-shadow(0 0 5px rgba(255, 214, 10, 0.2))' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
}
