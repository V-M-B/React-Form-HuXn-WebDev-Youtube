import React, { useId } from 'react'


export function UniqueId(props) {
    const id=useId();

    return (
        <>
            <label htmlFor={`${id}-emailllll`}>email</label>
            <input type="email"  id={`${id}-emailllll`} />

            <br />
            <label htmlFor={`${id}pass`}>password</label>
            <input type="password"  id={`${id}pass`} />
        </>
    )
}
