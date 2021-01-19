import React from 'react';

class GameForm extends React.Component {

    state= {
        team1: {
            name1: '',
            color1: ''
        },
        team2: {
            name2: '',
            color2: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            team1: {
                name1: event.target.value,
                color1: event.target.value
            },
            team2: {
                name2: event.target.value,
                color2: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
                GameForm
                <form>
                    <label>Team 1:</label>
                        <input type='text' name='name1' value={this.state.team1.name} onChange={this.handleChange} placeholder='team name'></input>
                        <input type='color' name='color1' value={this.state.team1.color}></input>
                    <br></br>
                    <label>Team 2:</label>
                        <input type='text' name='name2' value={this.state.team2.name} onChange={this.handleChange} placeholder='team name'></input>
                        <input type='color' name='color2' value={this.state.team2.color}></input>
                </form>
            </div>
        )
    }
}

export default GameForm