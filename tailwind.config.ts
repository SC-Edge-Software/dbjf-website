import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "dbjf-gray": "#2e3537ff",
                "dbjf-dark-gray": "#23282a",
                "dbjf-blue": "#4cdbffff"
            },
            transitionDuration: {
                "standard": "0.2s"
            },
            keyframes: {
                "growY": {
                    "0%": { transform: "scaleY(0)" },
                    "100%": { transform: "scaleY(1)" }
                }
            }
        },
    },
    plugins: [],
};
export default config;
