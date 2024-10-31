import React from 'react'
import { useState } from 'react'

export function UpdateArray() {
    const [friends,setFriends]=useState(['a','b','c','d']);

    function addnew(){//adding a new person
        setFriends([...friends,'v'])
    }
    const removef=()=>{
        setFriends(friends.filter((friend)=>friend!='v'))
    }

    const updatefriend=()=>{
        setFriends(friends.map((f)=>(f==='a'?'Aa':f)))
    }
    return (
        <section>
            {friends.map((f)=>(
                <li key={Math.random()}>{f}</li>
            ))}

            <button onClick={addnew}>add new friend</button>
            {/* adding a new person */}

            <button onClick={removef}>Remove Friend</button>
            {/* removing a friend */}

            <button onClick={updatefriend}>Update Friend</button>
        </section>
    )
}
