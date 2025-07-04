import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tienda-base/', // 👈 esto es clave para GitHub Pages
  plugins: [react()]
})
