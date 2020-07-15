import React from 'react';

import Nav from './Components/Navbar/Nav';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
    </div>
    </Router>
  );
}

export default App;
