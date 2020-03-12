// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from "axios";
import firebase from "firebase";
import "firebase/firestore";
import { firestore } from "../App";

//ACTION FOR DECKS
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const POST_DECK = "POST_DECK";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

//ACTION FOR CARDS
export const FETCH_CARDS = "FETCH_CARDS";
export const CARDS_SUCCESS = "CARDS_SUCCESS";
export const CARDS_FAILURE = "CARDS_FAILURE";

export const EDIT_CARDS = "EDIT_CARDS";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

export const POST_CARDS = "POST_CARDS";
export const PCARDS_SUCCESS = "PCARDS_SUCCESS";
export const PCARDS_FAILURE = "PCARDS_FAILURE";

//ACTION FOR SEARCH FILTERING
export const PUBLIC_DECKS = "PUBLIC_DECKS";
export const PUBLIC_DECKS_SUCCESS = "PUBLIC_DECKS_SUCCESS"

//GETTING DECKS
export const getDecks = id => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy")
    .then(response => {
      axios
        .get(`https://flashcards-be.herokuapp.com/api/deck/${id}`)
        .then(res => {
          let deckArray;
          if (res.data) {
            deckArray = response.data.concat(res.data);
          } else {
            deckArray = response.data;
          }
          dispatch({ type: FETCH_SUCCESS, payload: deckArray });
        });
    })
    .catch(error => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};

//GETTING CARDS FOR DECKS
export const getCards = (deck, user) => dispatch => {
  dispatch({ type: FETCH_CARDS });
  if (user === "demo") {
    axios
      .get(
        `https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${deck}`
      )
      .then(response => {
        dispatch({ type: CARDS_SUCCESS, payload: response.data.data });
      })
      .catch(error => {
        dispatch({ type: CARDS_FAILURE, payload: error });
      });
  } else {
    axios
      .get(`https://flashcards-be.herokuapp.com/api/deck/${user}/${deck}`)
      .then(response => {
        dispatch({ type: CARDS_SUCCESS, payload: response.data.data });
      })
      .catch(error => {
        dispatch({ type: CARDS_FAILURE, payload: error });
      });
  }
};

//POSTING A DECK W/ CARDS
export const postDecks = (deck, deckName, tags, icon) => dispatch => {
  dispatch({ type: POST_DECK });
  console.log('deck:', deck)
  console.log('deckName:', deckName)
  console.log('tags', tags)
  console.log('icon', icon)

  const id = firebase.auth().currentUser.uid;
  const cardd = { cards: deck };
  const decks = { tags, icon };
  const cards = cardd.cards;

  console.log({ cards, deck: { tags, icon } });
  axios
    .post(
      `https://flashcards-be.herokuapp.com/api/deck/${id}/${deckName.deckName}`,
      { cards, deck: { tags, icon } }
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: POST_FAILURE, payload: error });
    });
};

export const postCards = (cards, colId, props, deckInformation) => dispatch => {
  dispatch({ type: POST_CARDS });

  const id = firebase.auth().currentUser.uid;

  axios
    .post(`https://flashcards-be.herokuapp.com/api/deck/${id}/${colId}/add`, {
      cards: cards
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: PCARDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: PCARDS_FAILURE, payload: error });
    });
};

//UPDATE CARDS FOR DECKS
export const editCard = (deck, id, deckName) => dispatch => {
  dispatch({ type: EDIT_CARDS });
  const changess = { changes: deck };
  console.log(changess);
  axios
    .put(
      `https://flashcards-be.herokuapp.com/api/deck/update/${id}/${deckName}`,
      changess
    )
    // .put(`https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${deck.id}`, deck.data)
    .then(response => {
      console.log(response.data);
      //    history.push(`/editdeck/`);
      dispatch({ type: EDIT_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: EDIT_FAILURE, payload: error });
    });
};

// Public Decks
export const publicDecks = deckArr => {
  return { type: PUBLIC_DECKS, deckArr };
};
