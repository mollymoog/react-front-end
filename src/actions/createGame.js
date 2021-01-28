
export const createGame = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(game => dispatch({type: 'CREATE_GAME', payload: game}))
    }
}