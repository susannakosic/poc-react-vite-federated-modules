import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import dns from 'dns'
import * as dotenv from 'dotenv';

dns.setDefaultResultOrder('verbatim')
const config = dotenv.config();
// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(`command: ${command}, mode: ${mode}, ssrBuild: ${ssrBuild}`);
  return {
    plugins: [
      react(),
      federation({
        name: 'shared',
        filename: 'shared.js',
        exposes: {
          './Button': './src/components/Button'
        },
        shared: ["react"]
      })
    ],
    preview: {
      host: 'localhost',
      port: 5000,
      strictPort: true,
      cors: {
        origin: config.APP_URL,
      }
    },
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
  }
})
