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
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>
      Home Page
    </h1>
  </div>

);

export default App;
