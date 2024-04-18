import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  build: {
    assetsDir: "resources",
  },
  plugins: [
    vue(),
    ViteYaml(),
    VitePWA({
      registerType: 'autoUpdate',
      manifestFilename: "assets/manifest.json",
      manifest: {
        name: 'FRACTALCOUNTY Link Directory',
        short_name: 'Links',
        theme_color: '#0D1116',
        start_url: "../",
        scope: "../",
        icons: [
          {
            src: "./icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: null,
      },
      devOptions: {
        enabled: true,
        type: 'module',
      }
    }),
  ],
})
