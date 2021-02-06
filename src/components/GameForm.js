import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGame } from '../actions/createGame';
import GameContainer from '../containers/GameContainer';

class GameForm extends React.Component {

    // constructor(props) {
    //     super(props)
        state= {
            name: '',
            color: '',
            isSubmitted: false
        }
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.isSubmitted(true)
        this.props.createGame(this.state)
    }

    render() {
        return (
            <div className="row ">
                New Game:
                <form className="center-align" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='team name'></input>
                        {/* <input type='color' name='color' value={this.state.color} onChange={this.handleChange}></input> */}
                    </div>
                    <br></br>
                    <button className="btn amber darken-4" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createGame})(GameForm)

{/* <Link to="/game/new">Start Game</Link> */}