import React from 'react'
import { UserProvider } from './UserContesxt'
import { UserProfile } from './UserProfile'
import { UpdateUser } from './UpdateUser'
export default function App() {
    

    return (
        <UserProvider>
             <UserProfile/>
             <UpdateUser/>
        </UserProvider>
    )
}
