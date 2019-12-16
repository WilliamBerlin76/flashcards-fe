import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import Login from './components/login.js';

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

let firebaseApiKey;
let firebaseAuthDomain;

if (process.env.NODE_ENV !== 'production') {
  firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
} else {
  firebaseApiKey = process.env.FIREBASE_API_KEY;
  firebaseAuthDomain = process.env.FIREBASE.AUTH.DOMAIN;
}

const config = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain
};
firebase.initializeApp(config);

function App() {
  return (
    <div className='App'>
      <h1>Flashcards</h1>
      {/* //Links here */}
      <Route path='/login' component={Login} />

      {/* //Switch Here */}
    </div>
  );
}

export default App;
