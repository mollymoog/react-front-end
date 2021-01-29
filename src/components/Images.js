import React from 'react';

const Images = (props) => {

    const handleClick = (image, e) => {
        return
        // change background to team color
(        <img src={image.url} style={{backgroundColor: image.color}}class="w3-image w3-col s4 w3-border-color: w3-padding"></img> 
)    }

    return (
        <div>
        <div class="row">
        <div class="col s12 m7">
        <div class="card medium">
        <div class="card-image">
            {props.images.map((image, index) => 
                <img key={index} src={image.url} onClick={(e) => handleClick(image, e)} class='w3-image w3-col s4 w3-border w3-padding'></img>) }
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Images



