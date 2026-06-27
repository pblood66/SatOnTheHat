import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: '/SatOnTheHat/',
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
  optimizeDeps: {
    exclude: ['satellite.js']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: [],
    }
  },
  worker: {
    format: 'es'
  }
})