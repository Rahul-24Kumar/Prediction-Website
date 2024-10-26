import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F8C471",   // Light golden shade
          "secondary": "#F7DC6F", // Softer gold for contrast
          "accent": "#D4AC0D",    // Darker accent golden shade
          "neutral": "#3d4451",   // Keeping neutral for good contrast
          "base-100": "#FFF9E3",  // Very light golden base color
        },
      },
      "light",
      "bumblebee", // Keeping other default themes if needed
    ],
  },
  plugins: [daisyui],
};

export default config;