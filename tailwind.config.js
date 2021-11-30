// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade_in': 'fade_in 0.35s 0s 1 forwards;',
        'fade_out': 'fade_out 0.35s 0s 1 forwards;',
        'zoom_in': 'zoom_in 0.35s 0s 1 forwards;',
        'zoom_out': 'zoom_out 0.35s 0s 1 forwards;',
      },
      keyframes: {
        fade_in: {
          '100%': { opacity: '1' }
        },
        fade_out: {
          '100%': { opacity: '0' }
        },
        zoom_in: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1.0)' }
        },
        zoom_out: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(0.5)' }
        }
      }
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
      serif: ['New York', 'serif'],
    },
    minHeight: {
      '200': '200px',
      '400': '400px',
     }
  },
  variants: {
    // this is dumb
    backgroundColor: ['disabled', 'hover', 'focus'],
    borderColor: ['disabled', 'hover', 'focus'],
    cursor: ['disabled', 'hover', 'focus']
  },
  plugins: [],
}