import { DarkModeConfig } from 'tailwindcss/types/config';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['klima', ...defaultTheme.fontFamily.sans],
            }
        },
        /** 
         * From the MyDSA redesign-- except for ndc
         * @todo: discuss unifying themes between NDC (used by National and most chapters) and MyDSA
         * @see https://www.figma.com/file/1Hty7YjMHXRHPwbESKUBf1/mydsa-public-01?node-id=174%3A7266&t=dQG0Nsm7t16n7BKh-4
         */
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            /**
             * From the National Design Committee
             * @see https://design.dsausa.org/national-identity/color-palette/
             * @example bg-ndc-red
             */
            ndc: {
                'red': '#EC1F27',
                'red-1': '#F04C53',
                'red-2': '#F4797E',
                'red-3': '#F7A5A9',
                'red-4': '#FBD2D4',
                'black': '#231F20',
                'black-1': '#3B3838',
                'black-2': '#605C5C',
                'black-3': '#8C8989',
                'black-4': '#C1C0BF',
            },
            black: '#241F20',
            'dark-gray': '#747380',
            'mid-gray': '#E4E4E8',
            'lite-gray': '#F6F6F6',
            'dark-red': '#9F0005',
            red: '#E70109',
            peach: '#FFE2D6',
            white: '#FFFFFF',
            gray: colors.gray,
            rose: '#FFF1F2',
            blue: '#0EA5E9',
        }
    },
    darkMode: 'class' as DarkModeConfig,
};
