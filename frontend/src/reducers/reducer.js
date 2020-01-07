// import {
//     FETCH_ITEM_START,
//     FETCH_ITEM_SUCCESS,
//     FETCH_ITEM_FAILURE,
//     ADD_ITEM_START,
//     ADD_ITEM_SUCCESS,
//     ADD_ITEM_FAILURE,
//     EDIT_ITEM_START,
//     EDIT_ITEM_SUCCESS,
//     EDIT_ITEM_FAILURE,
// } from '../actions';

// const initialState = {
//     items: [],
//     errors: "",
//     isFetching: false
// }

// export const rootReducer = (state = initialState, { type, payload, }) => {
//     switch (type) {
//         case FETCH_ITEM_START:
//             return {
//                 ...state,
//                 errors: "",
//                 fetching: true
//             };
//         }
//     }
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, FETCH_CARDS, CARDS_SUCCESS, CARDS_FAILURE } from '../actions';

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
            }
        
        default: return state;
    }
};

export default reducer;