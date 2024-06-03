import { createContext, useState, useContext, ReactNode } from "react"
import { User } from "./models/auth"

type AuthContextProps = {
    user: User | null
    login: (userData: User) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (userData: User | undefined) => {
        if (userData === undefined) {
            return
        }
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
