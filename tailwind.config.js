/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-roadmap": "url('/images/roadmap.png')",
        "bg-elip": "url('/elip/elip1.svg')",
        "bg-elip2": "url('/elip/elip2.svg')",
      },

      animation: {
        bounceY: "bounceY 4s infinite",
      },
      keyframes: {
        bounceY: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
