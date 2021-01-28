import React from 'react';
import { connect } from 'react-redux';
import { createGame } from '../actions/createGame';
import ImagesContainer from '../containers/ImagesContainer';

class GameForm extends React.Component {

    state= {
        name: '',
        color: '',
        isSubmitted: false
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({isSubmitted: true})
        this.props.createGame(this.state)
        // route to game on submit
        // this.props.history.push('/games/new')
    }

    render() {
        return (
            <div>
                GameForm
                <form onSubmit={this.handleSubmit}>
                    <label>Team :</label>
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='team name'></input>
                        <input type='color' name='color' value={this.state.color} onChange={this.handleChange}></input>
                    <br></br>
                    <button type="submit">Start Game</button>
                </form>
                {this.state.isSubmitted && <ImagesContainer />}
            </div>
        )
    }
}



export default connect(null, {createGame})(GameForm)



// export default withRouter(GameForm)
{/* <Route exact path='/games/new' render={() => <GameContainer game={this.props.game}/>} /> */}
