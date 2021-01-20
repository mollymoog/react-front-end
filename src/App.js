import React from 'react';
import { connect } from 'react-redux';
import ImagesContainer from './containers/ImagesContainer'
import GameForm from './components/GameForm'

import './App.css';

class App extends React.Component {

  state = {
    url: ""
  }

  render() {
    return (
      <div className= "App">
        <GameForm />
        {/* <ImagesContainer /> */}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {


// }

export default connect()(App);
