import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
    },
  },
  define: {
    'process.env': {},
  },
  plugins: [vue()],
});