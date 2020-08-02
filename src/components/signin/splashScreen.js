import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-space-mono';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({    
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch', 
            display: 'block',
            
        },    
    },  

    introCaption: {
        marginBottom: 20,
    },


}));



const SplashScreen = () => {
    const classes = useStyles(); 
        return (
            //<div style={{backgroundColor: "red"}}
            <div>
                <Typography variant="h1" component="h2">
                lemoons☽
                </Typography>
                <Typography className={classes.introCaption} variant="h5" component="h5" gutterBottom>
                Match, chat, and meet new Aliens.
                </Typography>
                <div>
                <Button variant="outlined" onClick={() => { alert('Login to Existing Account.') }}>Login to Existing Account................</Button>
                </div>
                <div>
                <Button variant="outlined" onClick={() => { alert('Create a New Account.') }}>Create a New Account.....................</Button>
                </div>
            </div>
            
            
        );
}

export default SplashScreen;