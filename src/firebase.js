import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCf1tUPvaVVBaa88aPhSLzohifC0S0XnB8",
    authDomain: "lemoons-17bc2.firebaseapp.com",
    databaseURL: "https://lemoons-17bc2.firebaseio.com",
    projectId: "lemoons-17bc2",
    storageBucket: "lemoons-17bc2.appspot.com",
    messagingSenderId: "21919594229",
    appId: "1:21919594229:web:6552caf3a9bc4ce78bb7bc",
    measurementId: "G-RY3Y2MBFNK"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
export default database;