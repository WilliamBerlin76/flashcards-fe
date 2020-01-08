import React, {useState, useEffect, useRef, useOnClickOutside} from 'react';
import firebase from 'firebase';
import './App.css';
import Navigation from '../src/components/navigation';
import { Burger } from './components/Burger';
import { Menu } from './components/Menu';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FocusLock from 'react-focus-lock';

import Login from './components/login/login.js';
import Navbar from './components/navbar/navbar.js';
import Dashboard from './components/dashboard/dashboard';
import Settings from './components/profileSettings/profileSettings';

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
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className='App'>
      <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
          </div>
      <h1>Flashcards</h1>

      <Navbar />
      {/* //Links here */}
      <Route path='/login' render={props => <Login {...props} />} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/dashboard/settings' component={Settings} />

      {/* //Switch Here */}
    </div>
  );
}
export default App;
