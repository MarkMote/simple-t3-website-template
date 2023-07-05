import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tag1: "#bbf7d0",
        tag2: "#6d28d9",
        tag11: "#fbcfe8",
        tag22: "#4f46e5",
        headerBgStart: "#191c23",
        headerBgEnd: "#222031",
        aboutBgStart: "#e2e8f0",
        aboutBgEnd: "#ebddf7",
        aboutBgStart2: "#191c23",
        aboutBgEnd2: "#1a1e27",
        portfilioBgStart: "#fbcfe8",
        portfilioBgEnd: "#bbf7d0",
        l5: "#191c23",
        darkbg: "#e9ebf1",
        navBarHoverTag: "#bbcdeb",
        navBarHoverAbout: "#26232b",
        navBarHoverSolutions: "#c3cedf",
      },
      backgroundImage: {
        'earth': "url('/earth.jpg')",
        'spacex': "url('/spacex.jpg')",
        'waves': "url('/waves.jpg')",
        'waves2': "url('/waves2.jpg')",
        'waves5': "url('/waves5.jpg')",
        'waves3': "url('/waves3.jpg')",
        'waves4': "url('/waves4.png')",
        'waves4_dark': "url('/waves4_dark.png')",
        'computer': "url('/computer.jpg')",
        'office': "url('/office.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
