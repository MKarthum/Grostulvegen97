import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/Grostulvegen97/',
    plugins: [react(), tailwindcss()],
  };
});
