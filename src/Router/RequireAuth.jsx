import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthProvider';

const RequireAuth = ({children}) => {
    const {user, loading} = useContext(UserContext)
    const location = useLocation()
    if(loading)
    {
        return <div>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to="/signin" state={{from: location}} replace/>
};

export default RequireAuth;