import React, {useState, useRef, useOnClickOutside} from 'react';
import './App.css';
import Navigation from '../src/components/navigation';
import { Burger } from './components/Burger';
import { Menu } from './components/Menu';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FocusLock from 'react-focus-lock';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
      <h1>Flashcards</h1>

      {/* //Links here */}




      {/* //Switch Here */}
    </div>
  );
}
export default App;
