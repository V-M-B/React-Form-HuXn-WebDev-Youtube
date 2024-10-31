import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from './App'
import { App1 } from './App1'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1/>
  </StrictMode>,
)
