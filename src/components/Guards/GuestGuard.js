import React from 'react';
import useAuth from '../../hooks/useAuth'
import {Redirect} from 'react-router-dom'
function GuestGuard({children}) {
    const {isAuth} = useAuth()
    console.log('is Auth?')
    console.log(isAuth)
    if(isAuth)
    return <Redirect to="/Home"/>

    return (
        <>
        {children}
        </>
    );
}

export default GuestGuard;