import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    menu: {
    },
}));

function ProfilePage() {
    const classes = useStyles();
  return (
      <Container maxWidth='lg'>
          <Menu className={classes.menu}/>
          <Paper className={classes.root} elevation={1}>
          </Paper>
      </Container>
  );
}

export default ProfilePage;
