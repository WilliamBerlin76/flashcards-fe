import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, FETCH_CARDS, CARDS_SUCCESS, CARDS_FAILURE, NEXT_CARD } from '../actions';

const initialState = {
    decks: [],
    cards: [],
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
        case FETCH_CARDS:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case CARDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                decks: [],
                cards: action.payload
            };
        case CARDS_FAILURE: 
            return {
                ...state, 
                cards: [], 
                isFetching: false,
                error: action.payload
            };
        // case NEXT_CARD: 
        //     return {
        //         ...state,
        //         cards: state.cards.map

        //     }
        
        default: return state;
    }
};

export default reducer;