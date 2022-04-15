import {defineConfig} from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
          // mode: "development",
          // base: "/",
          // srcDir: "src",
          // filename: "sw.js",
          // includeAssets: ["/favicon.png"],
          // strategies: "injectManifest",
          manifest: {
              "theme_color": "#2669b8",
              "background_color": "#1322a4",
              "display": "standalone",
              "scope": "/",
              "start_url": "/",
              "name": "React vite app",
              "short_name": "reactvite",
              "description": "A react app with vite hosted on github pages.",
              "icons": [
                  {
                      "src": "/src/icon-192x192.png",
                      "sizes": "192x192",
                      "type": "image/png"
                  },
                  {
                      "src": "/src/icon-256x256.png",
                      "sizes": "256x256",
                      "type": "image/png"
                  },
                  {
                      "src": "/src/icon-384x384.png",
                      "sizes": "384x384",
                      "type": "image/png"
                  },
                  {
                      "src": "/src/icon-512x512.png",
                      "sizes": "512x512",
                      "type": "image/png"
                  }
              ]
          }
      })
  ]
})
