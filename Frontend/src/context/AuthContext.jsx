import {  createContext, useContext, useState } from "react"

const userContext = createContext();

const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);

    const login = () => {

    }

    const logout = () => {

    }

  return (
    <userContext.Provider value={(user,login,logout)}>
            {children}
    </userContext.Provider>
  )
}

export const useAuth = ( ) => useContext(userContext)

export default AuthContext