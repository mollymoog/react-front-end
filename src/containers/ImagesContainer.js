import React from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/fetchImages'
import Images from '../components/Images';


class ImagesContainer extends React.Component {

    componentDidMount() {
        // send game id to fetchImages()
        this.props.fetchImages(this.state.game.id)
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
        game: state.game.id
    }
}

export default connect(mapStateToProps, {fetchImages})(ImagesContainer)