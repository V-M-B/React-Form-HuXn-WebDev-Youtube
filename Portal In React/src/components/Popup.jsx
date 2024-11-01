import React from 'react'

export function Popup({copied}) {
    

    return (
        <div>
            {copied && (
                <div>Copied to ClipBoard</div>
                
            )}
        </div>
    )
}
