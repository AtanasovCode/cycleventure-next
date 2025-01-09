import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'hsl(268, 42%, 94%)',
        'background': 'hsl(270, 33%, 2%)',
        'primary': 'hsl(272, 62%, 71%)',
        'secondary': 'hsl(270, 78%, 32%)',
        'accent': 'hsl(68, 64%, 55%)',
      },
      backgroundImage: {
        'hero-mobile': "url('/hero-mobile.jpg')",
        'hero-tablet': "url('/hero-tablet.jpg')",
        'hero-desktop': "url('/hero-desktop.jpg')",

      },
    },
  },
  plugins: [],
} satisfies Config;
