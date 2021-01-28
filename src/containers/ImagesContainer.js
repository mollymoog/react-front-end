import React from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/fetchImages'
import Images from '../components/Images';


class ImagesContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        // send game id to fetchImages()
        let gameId = this.props.games[0].id
        this.props.fetchImages(gameId)
    }


    render() {
        
        return (
            <div>
                ImagesContainer
                <Images images={this.props.images}/>
            </div>
        )
        }
}

const mapStateToProps = state => {
    return {
        images: state.images,
        games: state.games
    }
}

export default connect(mapStateToProps, {fetchImages})(ImagesContainer)