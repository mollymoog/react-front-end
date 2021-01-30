import React from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/fetchImages'
import Images from '../components/Images';
import LoadPage from '../components/LoadPage';


class ImagesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 10
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.seconds > 0) {
                this.setState({
                    seconds: this.state.seconds -1
                })
            } else {
                let gameId = this.props.games[0].id
                this.props.fetchImages(gameId)
            }
        }, 1000)
    }

    render() {

        if (this.state.seconds > 0) {
            return (
                <LoadPage />
            )
        } else {
        
            return (
                <div>
                    <Images images={this.props.images}/>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        images: state.images,
        games: state.games
    }
}

export default connect(mapStateToProps, {fetchImages})(ImagesContainer)