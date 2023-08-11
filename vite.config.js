import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  server: {
    port: 8080
  },
  build: {
    assetsDir: '.',
  },
  base: './',
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  plugins: [
    vue()
  ]
})
