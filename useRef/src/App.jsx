import React from "react";
import { useRef } from "react";

export default function App() {
  const element = useRef(null);
  console.log(element);

  const focusInput = () => {
    element.current.focus();
    element.current.value="reactme"
  };
  return (
    <div>
      <input type="text" ref={element} />
      <button onClick={() => focusInput()}>button</button>
    </div>
  );
}
