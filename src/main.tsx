import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SubjectProvider } from './context/SubjectContext'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SubjectProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </SubjectProvider>
  </StrictMode>,
)
