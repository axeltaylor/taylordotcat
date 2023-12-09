import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    extend: {
      colors: {
        "not-white": "#E0DED3",
        "not-black": "#181C1F",
        "not-blue": "#0FE0FF",
        "not-red": "#CB3C45",
        "not-green": "#48D597",
        "not-pink": "#E86886",
        "not-yellow": "#F5CF65",
        "not-gray": "#292F31",
        "almost-black": "#0B1418",
        twitter: "#1DA1F2",
        github: "#f5f5f5",
        twitch: "#9146ff",
        youtube: "#ff0000",
        instagram: "#e1306c",
        linkedin: "#0077b5",
      },
      fontFamily: {
        custom:
          '"Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
  },
  plugins: [typography],
} as Config;
