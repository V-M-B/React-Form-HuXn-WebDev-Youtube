import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FetchingData } from './Fetching_data.jsx'
import { Example1 } from './Exercise1/example1.jsx'
import { Example2 } from './Exercise1/example2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <FetchingData /> */}
    <Example2/>
    {/* <Example1/> */}
  </StrictMode>,
)
