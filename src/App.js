import React from 'react';
import { connect } from 'react-redux';
import ImagesContainer from './containers/ImagesContainer'

import './App.css';

class App extends React.Component {

  state = {
    url: ""
  }

  render() {
    return (
      <div className= "App">
        <ImagesContainer />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {


// }

export default connect()(App);
