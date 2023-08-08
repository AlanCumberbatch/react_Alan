import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    }
  },
  server: {
    open: true,
    port: 5173,
    host: '0.0.0.0'
  },
})
