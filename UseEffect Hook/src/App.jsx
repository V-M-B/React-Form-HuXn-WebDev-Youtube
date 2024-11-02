import React, { useEffect, useState } from 'react'

export default function App() {
  const[value,setValue]=useState(0)
  const[smtg,setSmtg]=useState(0)
  useEffect(()=>{
    console.log("call useEffect");
    document.title=`Increment ${value}`
    
  },[value])

  return (
    <>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      <button onClick={()=>setSmtg(value+1)}>Increment by smtg</button>
    </>
  )
}
