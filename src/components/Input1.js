import React,{useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    
    multilineColor:{
        color:'white'
    }
  }));

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#ffffff',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: '#061532',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#061532',
          color: '#ffffff',
        },
      },
    },
  })(TextField);

function Input1(props) {
    const {Icon} = props; // as component
    const classes = useStyles();
    
    return (
        <FormControl className={classes.margin}>
        <CssTextField
        onChange={props.onChange}
        value={props.value}
        type={props.type}
          variant="outlined"
          id={props.id}
          placeholder={props.placeholder}
          InputProps={{
            className:classes.multilineColor,
            startAdornment:(
                <InputAdornment position="start">
                     <IconButton
                     aria-label={props.ariaLabel}
                     onClick={props.handleClickShowPassword}
                     onMouseDown={props.handleMouseDownPassword}
                   >

                   <Icon />
                   </IconButton>
                 
                </InputAdornment>
            )
          }}
        />
      </FormControl>
    );
}

export default Input1;