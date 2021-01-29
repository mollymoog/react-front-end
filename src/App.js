import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import GameContainer from './containers/GameContainer';

class App extends React.Component {

  render() {
    return (
      <div className= "App">
        <GameContainer />
      </div>
    )
  }
}

export default connect()(App);
