import React from 'react'

const Cart=()=>{
    const items=["Wireless EarBuds","Power Bank", "New SSD","Hoddies"];


    return (
        <div>
        <h1>
            Cart 🛒
        </h1>
        {items.length > 0 && <h2>You Cart Items are {items.length} </h2> }



        <ul>
            <h4>Products</h4>

            {items.map(items=>(
                <li key={items}>{items}</li>
            ))}

        </ul>
        </div>
    )
}





export function App1() {
    

    return (
        <>
            <Cart/>
        </>
    )
}
