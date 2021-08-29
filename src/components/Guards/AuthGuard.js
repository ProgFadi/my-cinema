import React from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import PropTypes from 'prop-types';

const AuthGuard = ({ children }) => {
  const { isAuth } = useAuth();
console.log('A')
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <>
      {children}
    </>
  );
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
