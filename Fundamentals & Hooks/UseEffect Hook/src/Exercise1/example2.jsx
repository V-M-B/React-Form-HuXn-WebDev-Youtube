import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export function Example2() {
 const [data, setdata] = useState([])
    useEffect(() => {
        
        async function getmyData() {
            const responce =await fetch('https://jsonplaceholder.typicode.com/posts')
            const data=await responce.json()
            setdata(data)
        }
        getmyData()
    }, [])


    return (
        <div>
            <ul>
                
                    {data.map((title)=>(
                       <li key={title.id}>
                        {/* {title.title} */}
                        {title.body}
                       </li>                
                    ))}
                
            </ul>
        </div>
    )
}
