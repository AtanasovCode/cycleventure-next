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
        'background': 'hsl(250, 53%, 8%)',
        'primary': 'hsl(272, 62%, 71%)',
        'secondary': 'hsl(270, 78%, 32%)',
        'accent': 'hsl(68, 64%, 55%)',
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
