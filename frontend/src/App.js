import React, {useState, useEffect, useRef} from 'react';
import { useOnClickOutside } from './hooks/hooks';
import firebase from 'firebase';
//import dashNav from './components/dashNav';
import  Burger  from './components/Burger';
import Menu from './components/Menu';
import { theme } from './components/theme';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FocusLock from 'react-focus-lock';
import { ThemeProvider } from 'styled-components';
import Login from './components/login/login.js';
import Navbar from './components/navbar/navbar.js';
import Dashboard from './components/dashboard/dashboard';
import Settings from './components/profileSettings/profileSettings';


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
      
    <ThemeProvider theme={theme}>
        <>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          <div><h1>Flashcards</h1></div>

      <Navbar />
      {/* //Links here */}
      <Route path="/login" render={props => <Login {...props} />} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/settings" component={Settings} />

      {/* //Switch Here */}
      
     
    </div>
    </>
    </ThemeProvider>
  );
}
export default App;
