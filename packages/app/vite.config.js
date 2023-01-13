import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import dns from 'dns'
import react from '@vitejs/plugin-react'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        shared: 'http://localhost:5000/assets/shared.js',
      },
      shared:{ // https://github.com/originjs/vite-plugin-federation/issues/226#issuecomment-1380040948 fix release pending
        react:{
          version:'18.0.2'
        }
      }
    })
  ],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
