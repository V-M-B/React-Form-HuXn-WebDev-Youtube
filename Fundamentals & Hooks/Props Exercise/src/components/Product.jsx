import React from 'react'

export function Product(props) {
    

    return (
        <>
            <div>
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.price}
                </p>
            </div>
        </>
    )
}
