import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createGame } from '../actions/createGame';
import GameContainer from '../containers/GameContainer';

class GameForm extends React.Component {

    state= {
        // team1: {
            name: '',
            color: ''
        // },
        // team2: {
        //     name2: '',
        //     color2: ''
        // }
    }

    handleChange = (event) => {
// fix nested states 

        this.setState({
            // team1: {
                [event.target.name]: event.target.value
                // [event.target.name]: event.target.value
            // },
            // team2: {
            //     name2: event.target.value,
            //     color2: event.target.value
            // }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createGame(this.state)
        this.setState({
            name: '',
            color: ''
        })
        // route to game on submit
        // this.history.push('/games/new')
    }

    render() {
        return (
            <div>
                GameForm
                <Route exact path='/games/new' render={() => <GameContainer game={this.props.game}/>} />
                <form onSubmit={this.handleSubmit}>
                    <label>Team 1:</label>
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='team name'></input>
                        <input type='color' name='color' value={this.state.color} onChange={this.handleChange}></input>
                    <br></br>
                    {/* <label>Team 2:</label>
                        <input type='text' name='name2' value={this.state.team2.name} onChange={this.handleChange} placeholder='team name'></input>
                        <input type='color' name='color2' value={this.state.team2.color}></input>
                    <br></br> */}
                    <input type="submit" />
                </form>
            </div>
        )
    }
}



export default connect(null, {createGame})(GameForm)