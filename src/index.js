import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/profile/ProfilePage';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
      fontFamily: "Space mono, mono space",
  }
});

ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
