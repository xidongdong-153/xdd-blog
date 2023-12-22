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
                xdd: {
                    'primary-100': '#892CDC',
                    'primary-200': '#BC6FF1',
                    'primary-300': '#fdf6fd',
                    'accent-100': '#D9ACF5',
                    'accent-200': '#fff4ff',
                    'text-100': '#EEEEEE',
                    'text-200': '#FDEBED',
                    'bg-100': '#222831',
                    'bg-200': '#393E46',
                    'bg-300': '#454e59',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                jett: "url('/imgs/jett.jpeg')",
                sage: "url('/imgs/sage-mirror.jpeg')",
            },
            minHeight: {
                'fill-content': `calc(100vh - 4rem)`,
            },
            height: {
                'screen-minus-4': `calc(100vh - 4rem)`,
            },
            transform: {
                mirror: 'scaleX(-1)',
            },
        },
    },
    plugins: [],
};
export default config;
