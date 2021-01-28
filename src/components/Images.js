import React from 'react';

const Images = (props) => {

    const handleClick = (event, team_id) => {
        event.target.addEventListener("click", function(team_id){
            console.log(team_id)
        })
    }

    return (
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            Images
            {props.images.map((image, index) => 
                <img key={index} src={image.url} onClick={() => this.handleClick(image.team_id)} class='w3-image w3-col s4 w3-border w3-padding'></img>) }
        </div>
    )
}

export default Images

