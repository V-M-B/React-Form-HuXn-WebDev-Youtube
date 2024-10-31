import React, { useState } from 'react'

export function Todolist() {
    const[todo,setTodo]=useState('')
    const[todolist,setTodolist]=useState([])

    
    const getTodo=(e)=>{
        
        setTodo(e.target.value);
        
         
    }

    const addTodo=()=>{
        if(todo.trim()==='')return '';
        setTodolist([...todolist,todo])
        setTodo('')
    }

    return (
        <>
            <input type="text" placeholder='Enter Todo'  onChange={getTodo}/>
            <button onClick={addTodo}>add</button>

        <ul>
           
             {todolist.map((value)=>(
                <li key={(Math.random()*9999)}>{value}</li>
            ))}   
        
        </ul>
        </>
    )
}
