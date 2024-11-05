import React from 'react'

export function Greeting({timeofday}) {
    
        return (
            <h1>
                {timeofday === "morning"
                ? "Good morning!"
                : timeofday === "afternoon"
                ? "Good afternoon!"
                : "Good evening!"}
            </h1>
        );
    }
    

