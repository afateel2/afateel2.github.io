import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Prevent the browser's native scroll-restoration from jumping back to a prior scroll
// position on refresh — combined with scroll-behavior:smooth, that jump was visible as
// "the page starts scrolling down" right after load. Every fresh load now deterministically
// starts at the top instead.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
