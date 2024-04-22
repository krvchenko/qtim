import { defineConfig } from 'vite';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import dynamicImport from 'vite-plugin-dynamic-import';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  plugins: [
    vue(),
    pluginRewriteAll(),
    dynamicImport(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
