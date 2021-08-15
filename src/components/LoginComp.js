import React,{useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MyTextField from '../components/Input1'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import MyButton from '../components/Button1'
import useAuth from '../hooks/useAuth';
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    mainDiv:{
        display:'flex',
        flexDirection:'column',
        width:'350px'
    },
    multilineColor:{
        color:'white'
    },
    p:{
        color:'white',
        textDecoration:'none'
    },
    optionsDiv:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
  }));

  const GreenCheckbox = withStyles({
    root: {
      color: 'white',
      '&$checked': {
        color: '#0049D5',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

function LoginComp(props) {
    const classes = useStyles()
    const [showPassword,setShowPassword] = useState(false)
    const [remember,setRemember] = useState(false)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const {login} = useAuth()
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      function handleClickShowPassword(e)
      {
          setShowPassword(!showPassword)
      }
      const onUsernameChange = (e)=>{
          setUsername(e.target.value)
      }
      const onPasswordChange = (e)=>{
        setPassword(e.target.value)
          
    }
    const VisIcon = () => <Visibility style={{
        color:'#ffffff'
    }} />
    const VisOffIcon = () => <VisibilityOff style={{
        color:'#ffffff'
    }} />
    const AccountIcon = () => <AccountCircle style={{
        color:'#ffffff'
    }} />

    const onRememberChange = ()=>{
        setRemember(!remember)
    }


    const auth = async ()=>{
        // validate
        let isValid = validate(username,password)
        
        if(isValid.length > 0) // there are errors
        {
            setError(isValid)
        }
        else{
            // request to server for auth
            try{
                await login(username,password)
              
           } catch (err) {
               console.log('error :')
               console.log(err)
           }

        }


    }

    const  validate = (username,password) =>{
        if(!username || username.length < 3 || username.length < 3)
        return "Invalid username!"

        if(!password || password.length < 3 || password.length < 3)
        return "invalid password!"

        return ""
    }
    return (
        <form className={classes.mainDiv}>
            <MyTextField
            value={username}
            id="username"
            type="text"
            placeholder="Username"
            ariaLabel="username label"
            Icon={AccountIcon}
            onChange = {onUsernameChange}
            >

            </MyTextField>

            <MyTextField
            value={password}
            id="password"
            type="password"
            ariaLabel="password label"
            placeholder="Password"
            onChange={onPasswordChange}
            Icon={showPassword?VisIcon:VisOffIcon}
            handleMouseDownPassword={handleMouseDownPassword}
            handleClickShowPassword={handleClickShowPassword}
            >

            </MyTextField>
            <div className={classes.optionsDiv}>
            <FormControlLabel
        control={<GreenCheckbox checked={remember} onChange={onRememberChange} name="remember" />}
        label={<Typography  style={{ color: '#ffffff' }}>Remember Me?</Typography>}
      />
       <Link style={{
           textDecoration:'none'
       }} to="/reg">
       <p className={classes.p}> Forgot Password?</p>
       </Link>

     
            </div>
            {
          error.length>0? <p style={{
              color:'red'
          }}>{error}</p>:null
      }
            <MyButton
       id="login"
       name="Login"
       action={auth}
       >

       </MyButton>
        </form>
    );

   
}

export default LoginComp;