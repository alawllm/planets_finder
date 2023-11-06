import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    globals: true,
    setupFiles: "./tests/setup.js",
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
})
