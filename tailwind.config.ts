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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        background: 'var(--background)',
      },
      backgroundImage: {
        'image-gradient': 'linear-gradient(to right, #D19B91, #D7895E)',
      },
      screens: {
        'xs': "550px",
      },
      fontWeight: {
        'regular': "400",
        'bold': "700",
      },
    },
  },
  plugins: [],
} satisfies Config;
