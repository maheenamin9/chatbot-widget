import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // generate fixed names for file that created after build
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'plugin.js',
        assetFileNames: (assetInfo) => {
          return assetInfo.name;
        },
        chunkFileNames: "chunk.js",
        manualChunks: undefined,
      }
    }
  }
})
