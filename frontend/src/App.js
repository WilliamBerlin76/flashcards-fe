import React from 'react';
import './App.css';
import Navigation from '../src/components/navigation';
import React from 'react';
import { Burger, Menu } from './components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FocusLock from 'react-focus-lock';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
    <div className="App">
      <h1>Flashcards</h1>

      {/* //Links here */}




      {/* //Switch Here */}
    </div>
    </>
    </ThemeProvider>
  );
}
export default App;
