import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCHx-eqYXktEwZpdoUrdazEJLxZKcodFmo",
  authDomain: "evernote-clone-9d008.firebaseapp.com",
  databaseURL: "https://evernote-clone-9d008.firebaseio.com",
  projectId: "evernote-clone-9d008",
  storageBucket: "evernote-clone-9d008.appspot.com",
  messagingSenderId: "459586854425",
  appId: "1:459586854425:web:6128c4eb5a16bb11cf1488",
  measurementId: "G-0P9JPBKJM7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
