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

<<<<<<< HEAD:src/components/signin/signIn.js
=======
function newUser() {
>>>>>>> 61fb8684ae1eb5b28851ec10a1c70ae92aeeb186:src/components/signin/newUser.js
  return (
    <div>
        <Button variant="contained" color="primary">
        Hello World
        </Button>
        <TextField className={classes.root}> </TextField>
    </div>
  );
}

<<<<<<< HEAD:src/components/signin/signIn.js
export default SignIn;
=======
export default newUser();
>>>>>>> 61fb8684ae1eb5b28851ec10a1c70ae92aeeb186:src/components/signin/newUser.js
