import React from "react";

const handleClick = () => console.log(Math.round(Math.random() * 10));

export function Button() {
  return <button onClick={handleClick}>Click</button>;
}
