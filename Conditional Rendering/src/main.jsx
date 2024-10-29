import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Greeting } from './Exercise/Greeting'

import App from './App.jsx'
import { App1 } from './App1.jsx'
import { Weather } from './Exercise/Weather.jsx'
import { UserStatus } from './Exercise/UserStatus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1/> 
    <Weather temp={15} /> 
     <UserStatus isloggedIN={true} isAdmin={false} />
    <Greeting timeofday={"morning"}/>
  </StrictMode>,
)
