import path from "path"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-project/', // <--- Added base path for GitHub Pages
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(""), "./src"),
    },
  },
})