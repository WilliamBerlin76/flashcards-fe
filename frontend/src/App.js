import React, { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from './hooks/hooks';
import firebase from 'firebase';
//import dashNav from './components/dashNav';
import Burger from './components/Burger';
import Menu from './components/menu/menu';
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
import Marketing from './components/marketing/Marketing';
import Privacy from './components/Privacy/privacy';
import DeckConfirmation from './components/confirmation/DeckConfirmation';
import ArchiveDecks from './components/archiveDecks/ArchiveDecks';

let firebaseApiKey;
let firebaseAuthDomain;
let firebaseMeasurementId;
let firebaseProjectId;
let firebaseAppId;

// if (process.env.NODE_ENV !== 'production') {
firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;
firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
firebaseMeasurementId = process.env.REACT_APP_MEASUREMENT_ID;
firebaseProjectId = process.env.REACT_APP_PROJECT_ID;
firebaseAppId = process.env.REACT_APP_APP_ID;
// } else {
//   firebaseApiKey = process.env.FIREBASE_API_KEY;
//   firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;
//   firebaseMeasurementId = process.env.FIREBASE_MEASUREMENT_ID;
//   firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
//   firebaseAppId = process.env.FIREBASE_APP_ID;
// }

const config = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  measurementId: firebaseMeasurementId,
  projectId: firebaseProjectId,
  appId: firebaseAppId
};
firebase.initializeApp(config);
firebase.analytics();

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        setOpen(false);
      });
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu
              open={open}
              setOpen={setOpen}
              id={menuId}
              logout={logout}
              closeMenu={closeMenu}
            />
          </FocusLock>
          {/* //Links here */}
          <DashNav />
          <Route exact path='/' component={Marketing} />
          <Route exact path='/decklist' component={DeckList} />
          <Route
            path='/cards/:deckName/cards'
            render={props => <Cards {...props} />}
          />
          <Route path='/login' render={props => <Login {...props} />} />
          <Route
            exact
            path='/dashboard'
            render={props => <Dashboard {...props} />}
          />
          <Route path='/preferences' component={Settings} />
          <Route path='/privacy' component={Privacy} />
          <Route
            path='/confirmation/:type/:colId/:action'
            render={props => <DeckConfirmation {...props} />}
          />
          <Route
            path='/archived-decks'
            render={props => <ArchiveDecks {...props} />}
          />
          {/* //Switch Here */}
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
