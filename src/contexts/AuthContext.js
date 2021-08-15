
import React, {createContext, useReducer} from 'react'
import LoginService from '../utils/HttpAbstraction'
import axios from 'axios'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode';

const initState = {
    isAuth:false,
    isInit:false,
    data:null // userData that saved on localstorage
}

const AuthContext = createContext({
    ...initState,
    login: ()=> Promise.resolve(),
    logout: ()=> {}
})

const reducer = (state, action) => {

    switch (action.type) {
      case 'INITIALISE': {
        const { isAuth, user } = action.payload;
        console.log('at init ')
        console.log('isAuth,user',isAuth,user)
        return {
          ...state,
          isAuth,
          isInit: true,
          user
        };
      }
      case 'LOGIN': {
        const { user } = action.payload;
       console.log('user in login dispatch is: ')
       console.log(user)
        return {
          ...state,
          isAuth: true,
          user
        };
      }
      case 'LOGOUT': {
        return {
          ...state,
          isAuth: false,
          user: null
        };
      }
      // case 'REGISTER': {
      //   const { user } = action.payload;
  
      //   return {
      //     ...state,
      //     isAuth: true,
      //     user
      //   };
      // }
      case 'ERROR': {
        const errorMSG = action.payload;
  
        return {
          ...state,
          isAuth: false,
          errorMSG
        };
      }
      default: {
        return { ...state };
      }
    }
  };

const setSessionData = (data) => {
    if (data) {
      console.log('user data saved')
      console.log(data)
      localStorage.setItem('userData', JSON.stringify(data));
      axios.defaults.headers.common.Authorization = `Bearer ${data.token.request_token}`;
    } else {
      console.log('remove userData')
      localStorage.removeItem('userData');
      delete axios.defaults.headers.common.Authorization;
    }
  };
export const AuthProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initState);
  
  const login = async (username, password) => {
    
    const response = await (new LoginService).login({username,password});
    const { data } = response.data;
    // origin
    setSessionData(data)
    // setSession(data);
    console.log('after set session data,',data)
    dispatch({
      type: 'LOGIN',
      payload: {
        user:data
      }
    });
  

   
  };
  const logout = () => {
    setSessionData(null);
    dispatch({ type: 'LOGOUT' });
  };

  const isValidToken = (accessToken) => {
    console.log('access token is : ',accessToken)
    if (!accessToken) {
      return false;
    }
    const decoded = jwtDecode(accessToken);
    console.log('decoded is: ')
    console.log(decoded)
    const currentTime = Date.now() / 1000;
  
    return decoded.exp > currentTime;
  };
  
  useEffect(()=>{
    const initialise = async () => {
        try {
          console.log('try to load userData from localstaorage')
          // const accessToken = window.localStorage.getItem('accessToken');
          let user = window.localStorage.getItem('userData');
          if(user)
          {
            user = JSON.parse(user);
          }
          console.log('ini init get data from localstorage')
          console.log(user)
          if (user && user.token && isValidToken(user.token.request_token)) {
            console.log('1')
            setSessionData(user);
  
            // const response = await axios.get('/api/account/me');
            // const { user } = response.data;
  
            dispatch({
              type: 'INITIALISE',
              payload: {
                isAuth: true,
                user
              }
            });
          } else {
            console.log('user data not found or expired')
            dispatch({
              type: 'INITIALISE',
              payload: {
                isAuth: false,
                user: null
              }
            });
          }
        } catch (err) {
          console.log("exception in get axios")
          console.error(err);
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuth: false,
              user: null
            }
          });
        }
      };
      initialise()
  },[])
    return <AuthContext.Provider
    value={{
        ...state,
        login,
        logout
        // ,
        // register
      }}
    >
        {children}
    </AuthContext.Provider>
}

export default AuthContext;
