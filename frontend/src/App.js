import React, { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from './hooks/hooks';
import firebase from 'firebase';
//import dashNav from './components/dashNav';
import Burger from './components/Burger';
import Menu from './components/Menu';
import { theme } from './components/theme';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FocusLock from 'react-focus-lock';
import { ThemeProvider } from 'styled-components';
import Login from './components/login/login.js';
import Dashboard from './components/dashboard/dashboard';
import Settings from './components/profileSettings/profileSettings';
import DashNav from './components/dashNav/dashNav';


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
  firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;
}

const config = {
  apiKey: "AIzaSyCvJ2Wye96WBuqm41GO4D8UiF5OGw1VR_Y",
  authDomain: firebaseAuthDomain
};
firebase.initializeApp(config);

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
<<<<<<< HEAD

          {/* //Links here */}
          <DashNav />
          <Route exact path='/login' render={props => <Login {...props} />} />
=======
          {/* //Links here */}
          <DashNav />
          <Route exact path = "/decklist" component = {DeckList} />
          <Route 
          path = '/cards/:deckName/cards'
          render = {(props) =>  <Cards {...props}/>}
          /> 
          <Route path='/login' render={props => <Login {...props} />} />
>>>>>>> ee891171c8507730ca6a95e2344d71077e2a61dc
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/dashboard/settings' component={Settings} />

          {/* //Switch Here */}
        </div>
      </>
    </ThemeProvider>
 
  );
}
export default App;
