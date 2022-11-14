import { DarkModeConfig } from "tailwindcss/types/config";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['klima', ...defaultTheme.fontFamily.sans],
            }
        },
        // https://design.dsausa.org/national-identity/color-palette/
        colors: {
            transparent: "transparent",
            current: "currentColor",
            red: {
                DEFAULT: "#EC1F27",
                1: "#F04C53",
                2: "#F4797E",
                3: "#F7A5A9",
                4: "#FBD2D4",
            },
            black: {
                DEFAULT: "#231F20",
                1: "#3B3838",
                2: "#605C5C",
                3: "#8C8989",
                4: "#C1C0BF",
            },
            // white-1 is off-white bg color from
            // https://www.figma.com/file/1Hty7YjMHXRHPwbESKUBf1/mydsa-public-01
            white: {
                DEFAULT: "#FFFFFF",
                1: "F9FAFB",
            },
            // blue is info/anchor color from above figma design
            blue: {
                DEFAULT: "#0EA5E9",
            }
        }
    },
    darkMode: 'class' as DarkModeConfig,
};
