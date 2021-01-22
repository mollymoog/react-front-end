import React from 'react';

const Images = (props) => {
    return (

        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            Images
            {props.images.map((image, index) => 
                <img class='w3-image w3-col s4 w3-border w3-padding' key={index} src={image.download_url} ></img>) }
        </div>
    )
}

export default Images
