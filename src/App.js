import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    url: ""
  }

  componentDidMount() {
    fetch(`https://picsum.photos/v2/list`)
      // .then(resp => resp.json())
      .then(resp => {
        console.log(resp.url)
        return(
          this.setState({
            url: resp.url
          }))})
  }

  render() {
    return (
      <div>
        App
        <br></br>
        <img
          src={this.state.url}
          alt="one"
        />
      </div>
    )
  }
}

export default App;
