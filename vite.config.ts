import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Kho câu hỏi (3000 câu Tiếng Anh + 480 câu Khoa học + 1000 câu Toán) tách khỏi mã ứng dụng để trình duyệt cache riêng;
    // ứng dụng tải từng kho khi cần bằng import() động (src/data/questionBank.ts), các nhóm dưới đây chỉ đặt tên chunk.
    chunkSizeWarningLimit: 1500,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'english-questions', test: /src[\\/]data[\\/]english/ },
            { name: 'science-questions', test: /src[\\/]data[\\/]questions/ },
            { name: 'math-questions', test: /src[\\/]data[\\/]math/, priority: 1 },
          ],
        },
      },
    },
  },
})
