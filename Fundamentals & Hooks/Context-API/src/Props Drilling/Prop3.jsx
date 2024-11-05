import React from 'react'
import { useContext } from 'react'
import {myv} from './App'

export default function Prop3() {
    const weight =useContext(myv)
    
    return (
        <h1>My weight is {weight} </h1>
    )
}
