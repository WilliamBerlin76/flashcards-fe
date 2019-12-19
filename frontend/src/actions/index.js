// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"



//GETTING DECKS

export const getDecks = () => dispatch => {

    dispatch({ type: FETCH_START });

    axios
    .get('http://localhost:5000/api/demo/I2r2gejFYwCQfqafWlVy')
    .then(response => {
        console.log(response)
        dispatch({ type: FETCH_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error)
        dispatch({ type: FETCH_FAILURE, payload: error})
    })
}