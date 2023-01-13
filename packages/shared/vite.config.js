import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shared',
      filename: 'shared.js',
      exposes: {
        './Button': './src/components/Button'
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
    port: 5000,
    strictPort: true,
    cors: {
      origin: 'http://localhost:5001',
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
