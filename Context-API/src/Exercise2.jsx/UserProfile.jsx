import React from 'react'
import { UserContext } from './UserContesxt'
import { useContext } from 'react'


export function UserProfile(props) {
    const {user} = useContext(UserContext)//get user from UserContext.jsx

    return (
        <>
           <h1>UserProfile</h1> 
           <p>Name:{user.name}</p>
        </>
    )
}
