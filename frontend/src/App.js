import React from 'react';
import './App.css';
import Navigation from '../src/components/navigation';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard/dashboard';
import Settings from './components/profileSettings/profileSettings';

function App() {
  return (
    <div className="App">

      {/* //Links here */}
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route path="/dashboard/settings" component={Settings} />


      {/* //Switch Here */}
    </div>
  );
}

export default App;
