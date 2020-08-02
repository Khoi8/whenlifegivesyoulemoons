import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    menu: {
        padding: 15,
    },
    profile: {
        width: 600,
        height: 600,
    }
}));

function ProfilePage() {
    const classes = useStyles();
  return (
      <Container maxWidth='xl'>
          <Menu className={classes.menu}/>
          <Paper className={classes.profile} elevation={1}>
              <Container maxWidth='lg'>
                  <Typography variant='h5'> Name: </Typography>
                  <Typography variant='h5'> Age: </Typography>
                  <Typography variant='h5'> Location: </Typography>
                  <Typography variant='h5'> lorem</Typography>
              </Container>
          </Paper>
      </Container>
  );
}

export default ProfilePage;
