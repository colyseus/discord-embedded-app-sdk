import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {

      // with options: http://localhost:5173/api/bar -> http://localhost:2567/bar
      '/api': {
        target: 'http://localhost:2567',
        changeOrigin: true,
        // ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },

      // // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      // '/foo': 'http://localhost:4567',

      // // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, ''),
      // },

      // // Using the proxy instance
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy will be an instance of 'http-proxy'
      //   },
      // },

      // // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      // '/socket.io': {
      //   target: 'ws://localhost:5174',
      //   ws: true,
      // },

    },
  },
})