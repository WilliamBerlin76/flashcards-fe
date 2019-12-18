import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


//components
import DeckList from './components/DeckList/DeckList';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>

      {/* Links here */}
      <div>
        <Link to = "/">Home</Link>
        <Link to = "/decklist">Deck List</Link>
      </div>



      {/* Switch Here */}
      <Switch>
        <Route exact path = "/decklist" component = {DeckList} />
        <Route exact path = "/cards"
        component = {Cards} />
      </Switch>

    </div>
  );
}

export default App;
