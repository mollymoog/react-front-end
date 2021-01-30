import React from 'react';

const Images = (props) => {

    const handleClick = (color, e) => {
        console.log(color)
        e.target.classList.add(`${color}`)
        console.log(e.target.classList)
        // change background to team color
    }

    return (
        <div className="row">
            {props.images.map((image, index) => 
                <div className="col s4">

                <div className="card small" onClick={(e) => handleClick(image.color, e)}>
                <img className="card-image" key={index} src={image.url} ></img>
                </div>
                </div>
                ) }
        </div>
    )
}

export default Images



