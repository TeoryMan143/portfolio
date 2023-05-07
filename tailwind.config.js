/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                high: ['Righteous', 'cursive'],
                mid: ['Signika Negative', 'sans-serif'],
                low: ['Roboto Mono', 'monospace'],
            },
        },
    },
    plugins: [require('@headlessui/tailwindcss')],
};
