import React from 'react';

class Heart extends React.Component {

    constructor(props) {
        super(props)
        this.state= {
            heart: 0
        }
    }

    handleHeart = () => {
        this.setState((state) => ({
            heart: state.heart + 1
        }))
        console.log(this.props.id)
    }

    render() {
        return (
        <p onClick={this.handleHeart} id={this.props.id}>♡ {this.state.heart}</p>
        )
    }

}

export default Heart