import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // TODO: Make proxy at the end of the project
  server: {
    proxy: {
      // Proxy requests starting with /temp to the backend
      '/temp': {
        target: 'http://localhost:3000', // Backend server
        changeOrigin: true, // Ensure headers reflect the target server
      },

      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    },
  },
});
