import React, { useEffect } from 'react'
import { useState } from 'react'

export function FetchingData() {
    const [data, setdata] = useState([])    
  
    useEffect(()=>{

    
    async function getData() {
       const resp= await fetch("https://jsonplaceholder.typicode.com/posts")
       const data=await resp.json()
       if(data && data.length){
        setdata(data)
       }
    }
    getData()
})

    return (
        <>
        <ul>
            {data.map((todos)=>(
                <div key={todos.id}>
                <li >{todos.title}</li>
                <li >{todos.body}</li>
                </div>
            ))}
        </ul>
        </>
    )
}
