import React, { useState } from "react";

export function ArrowTwo() {
  const [randomNumber, setRandomnuber] = useState(() => {
   return Math.floor(Math.random() * 100);
  });

  const newR=()=>{
    setRandomnuber(()=>{
        return Math.floor(Math.random() * 100);
    })
  }

  return (
    <>
    <h1>Random Number: {randomNumber}</h1>
    <button onClick={newR}>Genrate new Random Number</button>
    </>
  );
}
