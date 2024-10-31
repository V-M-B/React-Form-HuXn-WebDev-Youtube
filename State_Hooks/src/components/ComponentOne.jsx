import React from 'react'

export function ComponentOne({count,onClickHandler}) {
    const handleClick=()=>onClickHandler();

    return (
        <>
            <p> {count} </p>

            <button  onClick={handleClick}>Increament</button>
        </>
    )
}
