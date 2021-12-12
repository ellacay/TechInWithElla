


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from "firebase";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import { useEffect } from "react";
import "./Fonts/Personality/personalityDEMO.otf"


const serviceAccount = require('./serviceKey.json');

var firebaseConfig = {
  apiKey: "AIzaSyDhn5QfSxhxbXBomWqwemNdHkBr8tBcK1s",
  authDomain: "techinwithella.firebaseapp.com",
  databaseURL: "https://techinwithella-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "techinwithella",
  storageBucket: "techinwithella.appspot.com",
  messagingSenderId: "729879437418",
  appId: "1:729879437418:web:27bf50fa8903c67d26aa13",
  measurementId: "G-D2YN9J9SR9",
} // Initialize Firebase




firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export { storage, firebase as default }
