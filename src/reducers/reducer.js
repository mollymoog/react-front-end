
export default function reducer(state = {images: []}, action) {

    switch (action.type) {
        case 'FETCH_IMAGES':
            return {images: action.payload}
        default:
            return state
    }   
}

