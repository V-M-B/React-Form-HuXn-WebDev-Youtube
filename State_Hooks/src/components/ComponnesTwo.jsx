import React from 'react'

export function ComponnesTwo({count,onClickHandler}) {
    function handleClick(){
        onClickHandler()
    }

    return (
        <>
            <p>{count}</p>
            <button type="button" onClick={handleClick}>add</button>
        </>
    )
}
