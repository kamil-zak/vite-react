import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 6767,
    host: true,
  },
  build: {
    outDir: 'dist/vite',
  },
  base: mode === 'development' ? '' : './',
}));
