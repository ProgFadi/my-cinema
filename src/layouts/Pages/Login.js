import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LoginImage from "../../assets/images/login_img.jpg";
import LoginForm from '../../components/LoginComp'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight:'100vh'
    },
    rightBG:{
        backgroundColor:'#000000'
    },
    leftBG:{
        
        backgroundImage:`url(${LoginImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    },
    strong:{
        color:'#BA3E04'
    },
    white:{
        color:'#FFFFFF'
    },
    TitlePart:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    loginRoot:{
        margin:'50px'
    },
    rootFormContainer:{
        width:'100%'
    }
  }));
function Login() {
    const classes = useStyles();
    return (
        <Grid container spacing={0} className={classes.root}>
            {/* For image */}
            <Grid item xs={6} className={classes.leftBG}>
            </Grid>
            <Grid item xs={6} className={classes.paper+" "+classes.rightBG}>
              

               {/* Login Root Div */}
               <div className={classes.rootFormContainer}>
               <div className={classes.loginRoot}>
               <div className={classes.TitlePart}>
               <h1 className={classes.white}><strong className={classes.strong}>W</strong >ELCOME B<strong className={classes.strong}>A</strong>CK</h1>
                <p className={classes.white}>
                Find the latest and greatest in pop, country, reggae, 
soca, rap and every other type of music imaginable 
                </p>
               </div>
               <LoginForm/>
               </div>
                
                </div>
            </Grid>
        </Grid>
    );
}

export default Login;