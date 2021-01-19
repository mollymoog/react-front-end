
export function fetchImages() {
    return (dispatch) => {
        fetch(`http://localhost:3000/images`)
        .then(resp => resp.json())
        .then(images => dispatch({
            type: 'FETCH_IMAGES',
            payload: images
        }))
    } 
}

