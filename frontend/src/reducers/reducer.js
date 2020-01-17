import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, FETCH_CARDS, CARDS_SUCCESS, CARDS_FAILURE, POST_DECK, POST_SUCCESS, POST_FAILURE } from '../actions';

const initialState = {
    decks: [],
    cards: [],
    isFetching: false,
    error: '',
    isPosting: false,
    cards: [
        
        {
            front: '',
            back: '',
        }
    ],
    colId: '' 
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
        case POST_DECK:
            return {
                ...state,
                colId: '',
                cards: [],
                isFetching: false,
                isPosting: true,
                error: ''
            };
        case POST_SUCCESS:
            return {
                ...state,
                colId: action.payload,
                cards: [
                    {
                        front: action.payload,
                        back: action.payload,
                    }
                ],
                isFetching: false,
                isPosting: false,
                error: ''
            };
        case POST_FAILURE: 
            return {
                ...state,
                cards: [],
                isFetching: true,
                isPosting: false,
                error: action.payload
            };
        default: return state;
    }
};

export default reducer;