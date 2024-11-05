import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UniqueId } from './components/UniqueId.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UniqueId/>
  </StrictMode>,
)
