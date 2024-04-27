import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {

      /**
       * When developing locally - proxies "/api" to the local Colyseus server.
       * This mimics the behaviour of the production server.
       */
      '/api': {
        target: 'http://localhost:2567',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },

    },
  },
})