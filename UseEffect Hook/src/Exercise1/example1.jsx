import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export function Example1() {
    const [value,setValue]=useState(0)

    useEffect(() => {
        console.log("useEffect");
        console.log({value});
        
    }, [value])

    return (
        <>
            <h3>{value}</h3>
            <button onClick={()=>setValue(value+1)}>ClickMe</button>
        </>
    )
}
