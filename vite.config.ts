import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    vue(),
    ViteYaml(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'FRACTALCOUNTY Link Pile',
        short_name: 'Link Pile',
        theme_color: '#ffffff',
      },
      pwaAssets: {
        disabled: false,
        config: true,
      },
      includeAssets: ['logo.svg'],
      devOptions: {
        enabled: true,
        type: 'module',
      }
    }),
  ],
})
