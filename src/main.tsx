import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SubjectProvider, savedSubject } from './context/SubjectContext'
import { LanguageProvider } from './context/LanguageContext'
import { loadBank, preloadVisibleBanks } from './data/questionBank'
import { preloadScreens } from './screens'
import { whenIdle } from './utils/idle'

// Tải ngay kho câu hỏi của môn đang chọn, song song với lần vẽ trang chủ đầu tiên. Xong rồi, lúc rảnh
// mới tải sẵn các màn hình tách riêng và kho của môn còn lại (không tranh băng thông với phần đang cần).
loadBank(savedSubject())
  .catch(() => {})
  .finally(() =>
    whenIdle(() => {
      preloadScreens()
      preloadVisibleBanks()
    }),
  )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SubjectProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </SubjectProvider>
  </StrictMode>,
)
