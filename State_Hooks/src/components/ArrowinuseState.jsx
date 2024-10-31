import React from "react";
import { useState } from "react";

export function ArrowinuseState() {
  const [count, setCount] = useState(() => {
    const Count = 25;
    return Count;
  });
  const increment=()=>{
    setCount(prevCount=>prevCount+1)
  }
  return <>
  <h1>count:{count}</h1>
  <button onClick={increment}>Increament</button>
  </>;
}
