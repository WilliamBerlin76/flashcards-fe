import {
    FETCH_ITEM_START,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    EDIT_ITEM_START,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAILURE,
} from '../actions';

const initialState = {
    items: [],
    errors: "",
    isFetching: false
}

export const rootReducer = (state = initialState, { type, payload, }) => {
    switch (type) {
        case FETCH_ITEM_START:
            return {
                ...state,
                errors: "",
                fetching: true
            };
        }
    }