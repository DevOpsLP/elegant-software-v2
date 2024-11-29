/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Ensure all relevant file types are scanned
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eaf6ff",
          100: "#d3eaff",
          200: "#a3d4ff",
          300: "#73bdff",
          400: "#42a7ff",
          500: "#007bff", // Main primary blue
          600: "#006ae6",
          700: "#0056b3",
          800: "#004080",
          900: "#00294d",
        },
        accent: {
          50: "#fff4e5",
          100: "#ffe4bf",
          200: "#ffc88f",
          300: "#ffaa5f",
          400: "#ff8d2f",
          500: "#ff7400", // Soft orange accent
          600: "#e66300",
          700: "#b34d00",
          800: "#803700",
          900: "#4d2100",
        },
        gray: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#999999",
          500: "#666666",
          600: "#4d4d4d",
          700: "#333333",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },

          '50%': {
            transform: 'translateX(-30px) translateY(0) rotate(2deg)',
          },

          '100%': {
            transform: 'translateX(0) translateY(0)',
          },
          'stain-move': {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '50%': { transform: 'translate(15px, 10px) scale(1.05)' },
            '100%': { transform: 'translate(-10px, -15px) scale(0.95)' },
          },
        },
        waveContinuous: {
          '0%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      scrollSnapAlign: {
        'start': 'start',
        'center': 'center',
      },
      scrollSnapType: {
        'mandatory-y': 'y mandatory',
      },
      animation: {
        wave: 'wave 8s ease-in-out infinite', // Slightly longer duration for a smoother effect
        waveContinuous: 'waveContinuous 15s linear infinite', // Slower, seamless scrolling effect
        'stain-move': 'stain-move 6s infinite alternate ease-in-out',

      },
      
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  variants: {
    extend: {
      transform: ['responsive'],
    },
  },
  plugins: [],
}

