import React, { useState } from 'react'
import { Popup } from './Popup'
import { createPortal } from 'react-dom';

export function CopyIp() {
    const[ipvalue,setIpvalue]=useState('')
    const[copied,setCopied]=useState(false)
    
    function handleCopy() {
            navigator.clipboard.writeText(ipvalue)
                .then(()=>{
                setCopied(true)
                setTimeout(()=>{
                    setCopied(false)
                }, 10000)
            })
    }
    return createPortal(
        // wt content you what to render
        <div>
        <input type="text"  value={ipvalue} onChange={e=>setIpvalue(e.target.value)}/>
        <button onClick={handleCopy}>Copy</button>

        <Popup copied={copied}/>


        </div>,
        document.querySelector('#popup-c')
    )
}
