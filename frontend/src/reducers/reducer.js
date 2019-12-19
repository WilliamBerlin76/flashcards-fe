import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    decks: [],
    isFetching: false,
    error: ''
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
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
                decks: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                decks: [],
                isFetching: false,
                error: action.payload
            }; 
        
        default: return state;
    }
};

export default reducer;