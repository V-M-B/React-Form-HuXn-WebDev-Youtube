import './App.css'
import { Person } from './components/Person'
import { Product } from './components/Product'

function App() {

  return (
    <>
   <Person name="Ram" age={1800} />
   <Product name='Apple' price={2999} />
    </>
  )
}

export default App
