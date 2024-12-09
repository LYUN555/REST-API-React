import { createContext, useContext, useState } from "react";

// 1 Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// 2 SHare the created context with other components

export default function AuthProvider({ children }) {

    // Put some state int the context

    const[isAuthenticated, setAuthenticated] = useState(false)

    const[username, setUsername] = useState(null)


    function login (username, password) {
        if (username === 'lyun55' && password === '1234') {
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false

        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}