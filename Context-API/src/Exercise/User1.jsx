import React from 'react'
import { useContext } from 'react'//s1 //import useContex
import { name1,device1 } from './Context'//s1//import the context to import 
export function User1() {
    const name =useContext(name1)//s2//useContext to get it 
    const device =useContext(device1)//s2

    return (
        <>
            <h1>
                {[name,device]}
                {/* /s3 */}
            </h1>
        </>
    )
}
