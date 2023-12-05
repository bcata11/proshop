import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      eslintPlugin({
        cache: false,
        include: ['./src/**/*.js', './src/**/*.jsx'],
        exclude: [],
      }),
    ],
    proxy: {
      '/api': 'http://localhost:5000',
      '/uploads': 'http://localhost:5000',
    },
  });
};
