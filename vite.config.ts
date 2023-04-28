import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'PWA Application',
    short_name: 'PwaApp',
    theme_color: '#6B76C2',
    background_color: '#FFFFFF',
    display: 'standalone',
    icons: [
      {
        src: 'pwa-icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-icons/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: 'pwa-icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'pwa-icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaOptions)],
  server: {
    host: true,
  },
});
