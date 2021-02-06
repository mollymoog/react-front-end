import React from 'react';
import Heart from './Heart';


class Images extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            heart: {}
        }

    }

    handleClick = (color, e) => {
        console.log(color)
        e.target.classList.add(`${color}`)
        console.log(e.target.classList)
        // change background to team color
    }



    render() {
        return (
        <div >
        <div className="row">
            {this.props.images.map((image, index) => 
                <div className="col s4">
                <div className="card small" onClick={(e) => this.handleClick(image.color, e)}>
                    <div className="card-image">
                    <img  key={index} src={image.url} ></img>
                    </div>
                </div>
                    <Heart id={index}/>
                </div>
            ) }
        </div>
        </div>
    )}
}

export default Images



