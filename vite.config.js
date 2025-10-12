// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue plugin if using Vue

export default defineConfig({
  base: '/Resume/',   // important for GitHub Pages
  plugins: [react()]
})
