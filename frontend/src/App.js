import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


//components
import DeckList from './components/DeckList/DeckList';


function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>

      {/* //Links here */}

      <DeckList />


      {/* //Switch Here */}
    </div>
  );
}

export default App;
