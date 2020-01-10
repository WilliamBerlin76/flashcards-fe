import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import Login from './components/login/login.js';
import Navbar from './components/navbar/navbar.js';
import Dashboard from './components/dashboard/dashboard';
import Settings from './components/profileSettings/profileSettings';
import DashNav from './components/dashNav/dashNav'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


//components
import DeckList from './components/decks/DeckList';
import Cards from './components/cards/Cards';



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
  apiKey: "AIzaSyCvJ2Wye96WBuqm41GO4D8UiF5OGw1VR_Y",
  authDomain: firebaseAuthDomain
};
firebase.initializeApp(config);

function App() {
  return (
    <div className='App'>
     
       <DashNav/>
      {/* Links here */}
      {/* <div>
        <Link to = "/">Home</Link>
        <Link to = "/decklist">Deck List</Link>
        <Link to = '/login'>Login</Link>
        
      </div> */}



      {/* Switch Here */}
      <Switch>
        <Route exact path = "/decklist" component = {DeckList} />
        <Route 
        path = '/cards/:deckName/cards'
        render = {(props) =>  <Cards {...props}/>}
         /> 
        <Route path='/login' render={props => <Login {...props} />} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/dashboard/settings' component={Settings} />


      </Switch>
      
      {/* //Links here */}
      


    </div>
  );
}

export default App;
