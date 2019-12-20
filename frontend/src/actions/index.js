// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

//ACTION FOR DECKS
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"


//ACTION FOR CARDS
export const FETCH_CARDS = "FETCH_CARDS"
export const CARDS_SUCCESS = "CARDS_SUCCESS"
export const CARDS_FAILURE = "CARDS_FAILURE"


//GETTING DECKS

export const getDecks = () => dispatch => {

    dispatch({ type: FETCH_START });

    axios
    .get('http://localhost:5000/api/demo/I2r2gejFYwCQfqafWlVy')
    .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({ type: FETCH_FAILURE, payload: error})
    })
};

//GETTING CARDS FOR DECKS
export const getCards = (props) => dispatch => {

    
    

    dispatch({ type: FETCH_CARDS});

    axios
    .get(`http://localhost:5000/api/demo/I2r2gejFYwCQfqafWlVy/Biology`)
    .then(response => {
        console.log(response)
        dispatch({ type: CARDS_SUCCESS, payload: response.data.data})
    })
    .catch(error => {
        dispatch({ type: CARDS_FAILURE, payload: error})
    })
};