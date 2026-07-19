/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        accent1: "#00E5FF",
        accent2: "#8B5CF6",
        accent3: "#A855F7",
        darkBg: "#050816",
        glassBg: "rgba(10, 15, 30, 0.4)",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(124, 58, 237, 0.5)",
        accentGlow: "0 0 15px rgba(0, 229, 255, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
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
