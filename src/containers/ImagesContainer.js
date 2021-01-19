import React from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/fetchImages'
import Images from '../components/Images';
import GameForm from '../components/GameForm';


class ImagesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchImages()
    }


    render() {
        return (
            <div>
                ImagesContainer
                <GameForm />
                <Images images={this.props.images}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.images
    }
}

export default connect(mapStateToProps, {fetchImages})(ImagesContainer)