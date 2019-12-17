import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    deckInfo: [
        {
            id: 0,
            name: 'Starter Deck'
        },
        {
            id: 1,
            name: 'Starter Deck 2'
        }
    ],
    isFetching: false,
    error: ''
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                error: '',
                deckInfo: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }; 
        
        default: return state;
    }
};

export default reducer;