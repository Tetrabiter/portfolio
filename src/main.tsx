import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center bg-[#242424] text-white">Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
