import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterReducer } from './Exercise/counterReducer'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <CounterReducer/>
  </StrictMode>,
)
