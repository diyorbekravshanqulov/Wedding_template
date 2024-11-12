/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1920px",
        "2xl": "1920px",
      },
    },
    extend: {
      colors: {
        primary: "#323F36",
        second: "#F7F2EE",
      },
      fontFamily: {
        // Add the new fonts here
        ntr: ["NTR", "sans-serif"],
        yaldevi: ["Yaldevi", "sans-serif"],
        yantramanav: ["Yantramanav", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        kumbhSans: ["Kumbh Sans", "sans-serif"],
        kodchasan: ["Kodchasan", "sans-serif"],
        istokWeb: ["Istok Web", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        khula: ["Khula", "sans-serif"],
        cormorant: ["Cormorant", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #000000 0%, #450172 100%)",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.7)",
        },
        ".text-shadow-none": {
          "text-shadow": "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
