// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import firebase from 'firebase';

//ACTION FOR DECKS
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const POST_DECK = "POST_DECK"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_FAILURE = "POST_FAILURE"

//ACTION FOR CARDS
export const FETCH_CARDS = "FETCH_CARDS"
export const CARDS_SUCCESS = "CARDS_SUCCESS"
export const CARDS_FAILURE = "CARDS_FAILURE"






//GETTING DECKS

export const getDecks = () => dispatch => {

    dispatch({ type: FETCH_START });

    axios
    .get('https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy')
    .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data})
        console.log(response.data)
    })
    .catch(error => {
        dispatch({ type: FETCH_FAILURE, payload: error})
    })

};


//GETTING CARDS FOR DECKS
export const getCards = (deck) => dispatch => {
    console.log(deck)
    
    dispatch({ type: FETCH_CARDS});

    axios
    .get(`https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${deck}`)
    .then(response => {
       console.log(response.data.data)
        dispatch({ type: CARDS_SUCCESS, payload: response.data.data})
    })
    .catch(error => {
        dispatch({ type: CARDS_FAILURE, payload: error})
    })
};

//POSTING A DECK W/ CARDS
export const postDecks = (deck, props, colId) => dispatch => {

    dispatch({ type: POST_DECK})

    const id = firebase.auth().currentUser.uid
    // const colId = props.deckName
    const cardd = {cards: deck}
    const colId = props.colId
    console.log(deck)
    axios
    .post(`http://localhost:5000/api/deck/${id}/${colId}`,cardd)
    .then(res => {
        console.log(res)
        dispatch({
            type: POST_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: POST_FAILURE, payload: error})
    })
};

