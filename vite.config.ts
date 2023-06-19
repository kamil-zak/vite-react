import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_SERVER_PORT } = loadEnv(mode, process.cwd());
  const port = VITE_SERVER_PORT || 3001;

  return {
    plugins: [react()],
    server: {
      host: true,
      proxy: {
        '/api': `http://localhost:${port}`,
      },
    },
    build: {
      outDir: 'dist/front',
    },
  };
});
