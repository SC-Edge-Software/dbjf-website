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
                "dbjf-blue": "#4cdbffff"
            },
            transitionDuration: {
                "standard": "0.2s"
            }
        },
    },
    plugins: [],
};
export default config;
