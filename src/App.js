import React from 'react';

import Nav from './Components/Navbar/Nav';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
// import { BrowerRoiter as Router, Switch, Route} from ''

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;
