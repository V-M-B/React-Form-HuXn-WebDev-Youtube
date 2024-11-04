import React from "react";
import { useReducer } from "react";

const initializerArg = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
      break;
    case "decrement":
      return { ...state, count: state.count - 1 };
      break;
    case "reset":
      return { count: 0 };
      break;
    case "incramt":
      return { count:state.count+action.payload };
      break;
    case "decramt":
      return { count:state.count+action.payload };
      break;


    default:
      return state;
      break;
  }
};

export function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initializerArg);

  return <>
  <h1>Count:{state.count}</h1>
  <button onClick={()=>dispatch({type:'increment'})}>increase</button>
  <button onClick={()=>dispatch({type:'decrement'})}>decrease</button>
  <button onClick={()=>dispatch({type:'reset'})}>reset</button>
  <div>
  <button onClick={()=>dispatch({type:'incramt'})}>Add</button>   
  <button onClick={()=>dispatch({type:'decramt'})}>Sub</button>   
  </div>
  </>;
}

export {initializerArg}