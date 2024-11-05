import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FocusInput } from './Exercise/FocusInput'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <FocusInput/>
  </StrictMode>,
)
