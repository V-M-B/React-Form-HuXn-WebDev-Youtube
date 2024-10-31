import React from 'react'
import { useState } from 'react'
import { ArrowinuseState } from './components/ArrowinuseState'
import { ArrowTwo } from './components/ArrowTwo'
import { Arrow3 } from './components/Arrow3'
// import { ComponentOne } from './components/ComponentOne'
// import { ComponnesTwo } from './components/ComponnesTwo'
// import Counter from './Counter'
// import { UpdateArray } from './UpdateArray'
// import UpdateObj from './UpdateObj'

export function App() {
    const[count,setCount]=useState(0)

    return (
        <>
              {/* <Counter/>
    <UpdateArray/>
    <UpdateObj/> */}
  {/* <ComponentOne  count={count} onClickHandler={()=>setCount(count+1)} />
  <ComponnesTwo count={count} onClickHandler={()=>setCount(count+1)}/>   */}

  <ArrowinuseState/>
  <ArrowTwo/>
  <Arrow3/>
        </>
    )
}
