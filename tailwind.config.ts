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
                "dbjf-gray": "#2e3537",
                "dbjf-dark-gray": "#23282a",
                "dbjf-blue": "#4cdbff"
            },
            transitionDuration: {
                "standard": "0.2s"
            },
            backgroundImage: {
                "hexagons": "url('/images/hexagons.svg')"
            }
        },
    },
    plugins: [],
};
export default config;
