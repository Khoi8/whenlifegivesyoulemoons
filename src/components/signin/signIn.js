import React from 'react';
import {Button, TextField} from '@material-ui/core/';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '25ch',
    },
}));

const SignIn = () => {
    const classes = useStyles();

  return (
    <div>
        <Button variant="contained" color="primary">
        Hello World
        </Button>
        <TextField className={classes.root}> </TextField>
    </div>
  );
}

export default SignIn;
