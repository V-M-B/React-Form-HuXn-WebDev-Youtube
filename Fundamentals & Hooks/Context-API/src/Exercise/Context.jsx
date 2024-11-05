import React from 'react'
//s1
import { createContext } from 'react'//import create context
import { User1 } from './User1'//

    //s2
    export const name1=createContext()
    export const device1=createContext()

export default function Context(props) {
    //s3
    const name="hp"
    const device="laptop"
    
    

    return (
        <div>
            <name1.Provider value={name}>
            <User1/>
            </name1.Provider>
            <device1.Provider value={device}>
            <User1/>
            </device1.Provider>
        </div>
    )
}
