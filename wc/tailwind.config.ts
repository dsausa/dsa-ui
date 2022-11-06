import defaultTheme from "tailwindcss/defaultTheme";
import { DarkModeConfig } from "tailwindcss/types/config";

export default {
    content: ["./src/**/*.tsx"],
    plugins: [require('daisyui')],
    daisyui: {
        base: false,
        themes: false,
    },
    theme: {
        extend: {
            fontFamily: {
                'sans': ['styrene', ...defaultTheme.fontFamily.sans],
            }
        }
    },
    darkMode: 'class' as DarkModeConfig,
};
