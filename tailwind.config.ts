import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#8B5FBF',
                    200: '#61398F',
                    300: '#FFFFFF',
                },
                accent: {
                    100: '#D6C6E1;',
                    200: '#9A73B5',
                },
                text: {
                    100: '#4A4A4A',
                    200: '#878787',
                },
                bg: {
                    100: '#F5F3F7',
                    200: '#E9E4ED',
                    300: '#FFFFFF',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
