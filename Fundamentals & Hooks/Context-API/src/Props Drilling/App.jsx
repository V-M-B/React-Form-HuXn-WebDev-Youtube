import React from 'react'
import { createContext } from 'react'
import {Propsdrilling} from './Propsdrilling'

export const Data=createContext() //instance-exp-to use anywhere inside the project
export const Value=createContext() //instance-exp-to use anywhere inside the project


export default function App() {
  const age = 13;
  const myv=82.8;

  return (
    <><Data.Provider value={age}>
      <Propsdrilling />
    </Data.Provider>
    
    <Value.Provider value={myv}>
        <Propsdrilling />
      </Value.Provider></>
  )
}
