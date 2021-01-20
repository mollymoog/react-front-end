
export default function reducer(state = {images: [], games: []}, action) {

    switch (action.type) {
        case 'FETCH_IMAGES':
            return {images: action.payload}
        case 'CREATE_GAME':
            return {...state, games: [action.payload]}
        default:
            return state
    }   
}

