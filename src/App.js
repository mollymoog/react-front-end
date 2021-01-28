import React from 'react';
import { connect } from 'react-redux';
import GameForm from './components/GameForm'

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className= "App">
        <GameForm />
      </div>
    )
  }
}

export default connect()(App);
