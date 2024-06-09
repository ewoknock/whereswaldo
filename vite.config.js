import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/whereswaldo/",
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',  },
})
