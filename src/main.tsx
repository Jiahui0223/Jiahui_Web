import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lenis from 'lenis'
// Self-hosted fonts via Fontsource — no Google CDN runtime dependency
import '@fontsource-variable/inter'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource/caveat'
import HomePage from './pages/HomePage'
import JiahuiPage from './pages/JiahuiPage'
import './index.css'

// Global smooth scroll — exposed on window so anchor handlers can call lenis.scrollTo()
const lenis = new Lenis({
  duration: 1.3,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})
function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
;(window as any).lenis = lenis

// Restore deep-link from 404.html SPA fallback (if any)
const stash = sessionStorage.getItem('redirect')
if (stash && stash !== location.href) {
  sessionStorage.removeItem('redirect')
  const target = new URL(stash)
  history.replaceState(null, '', target.pathname + target.search + target.hash)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jiahui" element={<JiahuiPage />} />
        <Route path="/jiahui/*" element={<JiahuiPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
