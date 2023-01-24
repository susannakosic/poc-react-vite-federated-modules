import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import dns from 'dns'
import * as dotenv from 'dotenv';

dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config = dotenv.config().parsed;
  console.log(`config: ${JSON.stringify(config)}`);
  console.log(`command: ${command}, mode: ${mode}, ssrBuild: ${ssrBuild}`);

  return (
    {
      plugins: [
        react(),
        federation({
          name: 'app',
          remotes: {
            shared: `${config.SHARED_URL}/assets/shared.js`,
          },
          shared: ["react"]
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
      },
      server: {
        host: 'localhost',
        port: 5001,
        strictPort: true,
      }
    })
});