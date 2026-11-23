import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Kho câu hỏi (3000 câu Tiếng Anh + 480 câu Khoa học) tách khỏi mã ứng dụng để trình duyệt cache riêng.
    chunkSizeWarningLimit: 1500,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'english-questions', test: /src[\\/]data[\\/]english/ },
            { name: 'science-questions', test: /src[\\/]data[\\/]questions/ },
          ],
        },
      },
    },
  },
})
