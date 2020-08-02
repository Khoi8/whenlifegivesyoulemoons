import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-space-mono';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({    
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch', 
            display: 'block',
        },
    },  
}));

const ReturnUser = () => {

    const classes = useStyles(); 
        return (
            //<div style={{backgroundColor: "red"}}

                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                    <Typography variant="h1" component="h2">
                lemoons☽
                </Typography>
                <Typography className={classes.introCaption} variant="h5" component="h5" gutterBottom>
                Create an account at the speed of light.
                </Typography>
                        <TextField
                            id="standard-password-input"
                            label="Username"
                            type="username"
                            autoComplete="gi current-username"
                        />
                    
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />

                    </div>
                    <div>
                    <Button variant="outlined" href="SplashScreen.js">Back</Button>
                <Button variant="outlined" onClick={() => { alert('You are out of this world! Thanks for creating an account with Lemoons☽.') }}>Submit</Button>
                </div>
                </form>
            //</div>
            
        );
}

export default ReturnUser;
