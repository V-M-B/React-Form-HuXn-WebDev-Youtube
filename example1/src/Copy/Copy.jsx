import React from 'react'
const copyHandler=()=>{
    alert("Don't Steal My code")
}
export function Copy() {
    

    return (
        <p onCopy={copyHandler}>
            Lorem quisquam ducimus delectus dolorum animi quam, inventore deleniti asperiores in.
        </p>
    )
}
