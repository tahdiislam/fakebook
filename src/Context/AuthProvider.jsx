import React from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

const auth = getAuth(app)

// user context
const UserContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const authInfo = {
        user
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;