import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  /*
  <img src={logo} className="App-logo" alt="logo" />
  */
  render() {
    return (
      <Router>
        <div className="container">
        <Jumbotron />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
