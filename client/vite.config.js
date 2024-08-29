import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      /**
       * https://discord.com/developers/docs/change-log#activities-proxy-csp-update
       */
      '/.proxy/colyseus': {
        target: 'http://localhost:2567',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/.proxy\/colyseus/, ''),
      },

    },
  },
})