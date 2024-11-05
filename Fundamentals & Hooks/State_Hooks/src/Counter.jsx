import React from 'react'
import { useState } from 'react'

export default function Counter() {
const [count,setCount]=useState(0)
const add=()=>{
  setCount(count+1)
}
function sub(){
  setCount(count-1)
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
    </>
  )
}
