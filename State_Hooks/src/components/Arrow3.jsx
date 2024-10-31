import React, { useEffect, useState } from "react";

export function Arrow3() {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleClear = () => {
    setName("");
  };
  return(
  <>
    <h1>Your Name:{name}</h1>
    <input
      type="text"
      value={name}
      onChange={handleChange}
      placeholder="Enter your name"
    />
    <button onClick={handleClear}>Clear Name</button>
  </>
  
)}
