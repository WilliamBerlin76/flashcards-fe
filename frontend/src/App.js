import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const config = {
  apiKey: 'AIzaSyCvJ2Wye96WBuqm41GO4D8UiF5OGw1VR_Y',
  authDomain: 'flashcards-bbd42.firebaseapp.com'
  // ...
};
firebase.initializeApp(config);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      console.log('user', user);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Flashcards</h1>

      {isSignedIn ? (
        <span>
          <div>Signed In!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <img
            alt='profile picture'
            src={firebase.auth().currentUser.photoURL}
          />
        </span>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}

      {/* //Links here */}

      {/* //Switch Here */}
    </div>
  );
}

export default App;
