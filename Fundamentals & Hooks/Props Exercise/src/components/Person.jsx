import React from 'react'

export function Person(props) {
    

    return (
        <>
            <div>
            {/* //getting the values form props */}
                <h1>{props.name}</h1>
                <p> {props.age} </p>
            </div>
        </>
    )
}
