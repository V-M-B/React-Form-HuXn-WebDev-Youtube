import React from "react";
import { useReducer } from "react";

// inital value
const initializerArg = { count: 0 };

const reducer = (state, action) => {
  // state=wt are we updating
  //action=how are we updating
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initializerArg);

  return <>
  <h1>

    Count:{state.count}
    <button onClick={()=>dispatch({type:'increment'})}>++</button>
    <button onClick={()=>dispatch({type:'decrement'})}>--</button>
    <button onClick={()=>dispatch({type:'reset'})}>0 </button>

  </h1>
  </>;
}
