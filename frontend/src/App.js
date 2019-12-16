import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import Login from './components/login.js';

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const config = {
  apiKey: 'AIzaSyCvJ2Wye96WBuqm41GO4D8UiF5OGw1VR_Y',
  authDomain: 'flashcards-bbd42.firebaseapp.com'
  // ...
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
