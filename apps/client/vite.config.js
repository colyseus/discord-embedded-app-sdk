import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      /**
       * For convenience, forward "/colyseus" requests to the local Colyseus server.
       */
      '/colyseus': {
        target: 'http://localhost:2567',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/colyseus/, ''),
      },
    },

    allowedHosts: [
      'localhost',
      '.trycloudflare.com',
      '.ngrok-free.app',
    ],
  },
})
