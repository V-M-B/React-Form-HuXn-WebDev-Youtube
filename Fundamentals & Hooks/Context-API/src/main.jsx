import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App2 from './Exercise2.jsx/App2'
// import UseContextHook from './useContextHook'
// import App from './Props Drilling/App'
// import { Propsdrilling } from './Props Drilling/Propsdrilling.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Propsdrilling/> */}
    {/* <UseContextHook/> */}
  <App2/>

  </StrictMode>,
)
