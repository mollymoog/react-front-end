import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Instructions from './components/Instructions';
import NavBar from './components/NavBar';
import GameContainer from './containers/GameContainer';

class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar />
      <div className= "container">
      <Switch>
        <Route exact path="/codepix" component={Home} />
        <Route exact path="/game/new" component={GameContainer} />
        <Route exact path="/instructions" component={Instructions} />

      </Switch>
      </div>
      </Router>
    )
  }
}

export default connect()(App);
