import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['d7f37592721a.ngrok-free.app','fresh-cycles-shave.loca.lt'],
    host: true, 
    port: 5173, 
  },
  root: 'frontend', // tell Vite where index.html is
  build: {
    outDir: '../dist', // put dist outside frontend, so Vercel can find it
    emptyOutDir: true,
  },
})
