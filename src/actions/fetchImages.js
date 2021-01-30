
export const fetchImages = (gameId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/games/${gameId}/images`)
        .then(resp => resp.json())
        .then(images => dispatch({
            type: 'FETCH_IMAGES',
            payload: images
        }))
    } 
}

