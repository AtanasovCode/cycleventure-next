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
        'background': 'hsl(170, 28%, 10%)', // 'hsl(250, 53%, 8%)',
        'primary': 'hsl(272, 92%, 85%)',
        'secondary': 'hsl(170, 28%, 13%)',
        'accent': 'hsl(68, 64%, 55%)',
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
