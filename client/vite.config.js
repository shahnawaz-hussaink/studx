import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['8e9e76e3fc0b.ngrok-free.app'],
    host: true, 
    port: 5173, 
  },
})
