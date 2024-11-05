import React from 'react'
    const admi=()=>{
        return <h1>Welcome Admin!</h1>
    }
    const user=()=>{
        return <h1>Welcome User!</h1>
    }
export function UserStatus({isloggedIN,isAdmin}) {
    if(isloggedIN && isAdmin)
    {
        return admi()
    }
    else{
       return  user()
    }

}
