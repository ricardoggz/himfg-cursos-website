import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    const loginUser = (user)=>{
        localStorage.setItem('user', JSON.stringify(user))
        setUser(JSON.parse(localStorage.getItem('user')))
    }
    const signOutUser = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }
    return (
        <UserContext.Provider value={{user, loginUser, signOutUser}}>
            {children}
        </UserContext.Provider>
    )
}