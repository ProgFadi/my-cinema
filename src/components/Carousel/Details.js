import React from 'react';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'start',
        position:'absolute',
        top:'25%',
        left:'100px'
    },
    h1:{
        color:'white',
        fontSize:'3em'
    },
    h3:{
        color:'white'
    },
    p:{
        color:'white'
    }
   
}))
function Details(props) {
    const classes = useStyles();
    const  item = props.data
    return (
        <div
        className={classes.root}
        >
          <h1 className={classes.h1}>{item.title}</h1>  
          <h3 className={classes.h3}>{item.chapter}</h3>  
          <p className={classes.p}>{item.duration}</p>
          <p className={classes.p}>{item.seeTrailer}</p>
        </div>
    );
}

export default Details;