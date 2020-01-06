import React from 'react';
import './App.css';
import Navigation from '../src/components/navigation';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>

      {/* //Links here */}
      <Route path="/dashboard" component={Dashboard}/>



      {/* //Switch Here */}
    </div>
  );
}

export default App;
