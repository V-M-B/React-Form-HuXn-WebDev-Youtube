import React from "react";

// const moveHandler=()=>{
// }
export function Move() {
  const moveHandler = () => {
    alert("move quickly");
  };
  return (
    <>
      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi
        inventore dolore deserunt laborum explicabo, eius porro temporibus quasi
        perspiciatis impedit libero officia?
      </p>
    </>
  );
}
