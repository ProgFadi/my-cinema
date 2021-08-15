import React from 'react';
import useAuth from '../../hooks/useAuth'
import {Redirect} from 'react-router-dom'
function AuthGuard({children}) {
    const {isAuth} = useAuth()
    if(!isAuth)
    return <Redirect to="/login"/>

    return (
        <>
        {children}
        </>
    );
}

export default AuthGuard;