import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root:{
        backgroundColor:'#ffffff',
        color:'black',
        '&:hover': {
            backgroundColor: '#0049D5',
            color: 'white',
        }
    }
  }));

function Button1(props) {
    const classes = useStyles()
    return (
        <Button
        className={classes.root}
        onClick={props.action}
        id={props.id}
        variant="contained" color="primary">
            {props.name}
        </Button>
    );
}

export default Button1;