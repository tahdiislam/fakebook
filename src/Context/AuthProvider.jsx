import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app)

// user context
export const UserContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user with email and password
    const userCreateWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user with email and password
    const loginWithEmailAndPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // load a valid user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])
    const authInfo = {
        user,
        userCreateWithEmailPass,
        loginWithEmailAndPass,
        loading,
        setLoading,
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;