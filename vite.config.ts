import { defineConfig } from 'vite'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    base: '',
    build: {
        assetsDir: 'resources',
    },
    plugins: [
        vue(),
        ViteYaml(),
        VitePWA({
            registerType: 'autoUpdate',
            manifestFilename: 'assets/manifest.json',
            manifest: {
                name: 'FRACTALCOUNTY Link Directory',
                short_name: 'FRACTALCOUNTY - Links',
                description:
                    "A convienent directory containing links to FRACTALCOUNTY's social media profiles and other relevant accounts across the internet.",
                theme_color: '#0D1116',
                start_url: '../',
                scope: '../',
                icons: [
                    {
                        src: './icons/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: './icons/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
                screenshots: [
                    {
                        src: './thumbnail.png',
                        sizes: '640x360',
                        type: 'image/png',
                        form_factor: 'wide',
                        label: 'FRACTALCOUNTY-Links',
                    },
                    {
                        src: './thumbnail-mobile.png',
                        sizes: '456x608',
                        type: 'image/png',
                        form_factor: 'narrow',
                        label: 'FRACTALCOUNTY-Links',
                    },
                ],
            },
            workbox: {
                navigateFallback: null,
            },
            devOptions: {
                enabled: true,
                type: 'module',
            },
        }),
    ],
})
