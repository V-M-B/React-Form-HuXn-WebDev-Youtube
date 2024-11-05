import React from "react";
import useFetch from "./useFetch";

export default function App() {

const [data]=useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
      {
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
}
