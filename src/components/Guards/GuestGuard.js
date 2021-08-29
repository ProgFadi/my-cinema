import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';

const GuestGuard = ({ children }) => {
  const { isAuth } = useAuth();
  console.log('G')
  if (isAuth) {
    return <Redirect to="/Home" />;
  }

  return (
    <>
      {children}
    </>
  );
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
