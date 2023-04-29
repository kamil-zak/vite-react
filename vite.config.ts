import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { ViteStaticCopyOptions, viteStaticCopy } from 'vite-plugin-static-copy';

const getPwaIcon = (sizes: string) => ({ src: `pwa-icons/icon-${sizes}.png`, sizes, type: 'image/png' });

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'PWA Application',
    short_name: 'PwaApp',
    theme_color: '#6B76C2',
    background_color: '#FFFFFF',
    display: 'standalone',
    icons: ['192x192', '256x256', '384x384', '512x512'].map(getPwaIcon),
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
  },
};

const copyOptions: ViteStaticCopyOptions = {
  targets: [{ src: 'src/pwa/pwaInfo.json', dest: '' }],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaOptions), viteStaticCopy(copyOptions)],
  server: {
    host: true,
  },
});
