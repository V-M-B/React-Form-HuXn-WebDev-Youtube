import React from 'react'
import { useRef } from 'react'

export function FocusInput() {
    const Ipelement=useRef(null)
    console.log(Ipelement);
    function handleChange() {
    Ipelement.current.focus();
    Ipelement.current.value="mongo"
    }
    return (
        <>
            <input type="text" ref={Ipelement} />
            <button onClick={handleChange}>click</button>
        </>
    )
}
