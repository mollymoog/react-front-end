import React from 'react';
import ImagesContainer from './ImagesContainer';
import GameForm from '../components/GameForm';

class GameContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubmitted: false
        }
    }

    handleSubmit = (isSubmitted) => {
        this.setState({
            isSubmitted: isSubmitted
        })
    }

    render() {

        if (this.state.isSubmitted === true) {
            debugger

            return (
                < ImagesContainer />
            )
        } else {
            return (
                <GameForm isSubmitted={this.handleSubmit}/>
            )
        }
    }
}

export default GameContainer