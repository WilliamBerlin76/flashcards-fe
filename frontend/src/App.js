import React from 'react';
import './App.css';
import Navigation from '../src/components/navigation';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard';
import Settings from './components/profileSettings';

function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>

      {/* //Links here */}
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route path="/dashboard/settings" component={Settings} />


      {/* //Switch Here */}
    </div>
  );
}

export default App;
