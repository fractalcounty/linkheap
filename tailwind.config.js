/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'


export default {
    content: ['./src/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.22)",
                     "0 0px 65px rgba(255, 255,255, 0.08)",
                ],
            },
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
