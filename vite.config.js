import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "61c36c4b1d8a",
    project: "javascript-react"
  })],

  base: '/iClone',

  build: {
    sourcemap: true
  }
})