import { GithubAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from "../firebase";

//create contexts
const AuthContext = createContext()
//provider contexts
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //sign in with github
    const signinWithGithub = () => {
        const provider = new GithubAuthProvider();
        signInWithRedirect(auth, provider);
    }
    //sign out with github
    const logout = () => signOut(auth)
    //value
    const value = {currentUser, setCurrentUser, signinWithGithub, logout}
    //set currentuser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}