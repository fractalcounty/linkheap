/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'


export default {
    content: ['./src/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Alte Haas Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            }
        },
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: ['dark', 'light'],
    },
}
