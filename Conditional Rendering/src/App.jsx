import React from 'react'

export default function App() {
  const ValidPassword=()=><h1>Valid Password</h1>
  const InvalidPassword=()=><h1>Invalid Password</h1>

  const Password=({isValid})=>{
    // if (isValid) {
    //   return ValidPassword()
    // }
    // else{
    //   return InvalidPassword()
    // }
    return isValid?<ValidPassword/>:<InvalidPassword/>
    // ternary operator condtionaly rendering
  }

  return (
    <>
      <Password isValid={true}/>
    </>
  )
}
