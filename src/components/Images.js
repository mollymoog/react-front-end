import React from 'react';

const Images = (props) => {

    const handleClick = (image, e) => {

        <img src={image.url} class="w3-image w3-col s4 w3-border-color: w3-padding"></img> 
    }

    return (
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            Images
            {props.images.map((image, index) => 
                <img key={index} src={image.url} onClick={(e) => handleClick(image, e)} class='w3-image w3-col s4 w3-border w3-padding'></img>) }
        </div>
    )
}

export default Images



