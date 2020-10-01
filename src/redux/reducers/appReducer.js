const SET_REQUEST_DATA = 'app/SET_REQUEST_DATA';

let initialState = {
    data: []
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_REQUEST_DATA: {
            return {
                ...state,
                data: action.data
            }
        }

        default:
            return state
    }
};

export const setData = data => ({type: SET_REQUEST_DATA, data});

export const setRequestData = () => (dispatch) => {

    fetch(`https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`)
        .then(response => response.json())
        .then(source => {
            dispatch(setData(source.map(item => {
                return ({
                    id: item.id,
                    user: item.user.name,
                    raw: item.urls.raw,
                    full: item.urls.full
                })
            })))
        })
        .catch(error => console.error(error.message));
};