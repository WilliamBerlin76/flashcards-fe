import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_CARDS,
  CARDS_SUCCESS,
  CARDS_FAILURE,
  POST_DECK,
  POST_SUCCESS,
  POST_FAILURE,
  POST_CARDS,
  PCARDS_SUCCESS,
  PCARDS_FAILURE,
  EDIT_CARDS,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  PUBLIC_DECKS,
} from "../actions";

const initialState = {
  decks: [],
  deckcards: [],
  isFetching: false,
  error: "",
  isPosting: false,
  cards: [
    {
      front: "",
      back: ""
    }
  ],
  colId: "",
  deckInformation: [
    {
      deckName: ""
    }
  ],
  deck: {
    tags: [],
    icon: ""
  },
  changes: [
    {
      front: "",
      back: "",
      archived: false
    }
  ],
  query: [],
  publicDecks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
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
        error: ""
      };
    case CARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        decks: [],
        deckcards: action.payload
      };
    case CARDS_FAILURE:
      return {
        ...state,
        deckcards: [],
        isFetching: false,
        error: action.payload
      };
    case POST_DECK:
      return {
        ...state,
        deckInformation: [],
        cards: [],
        deck: {
          tags: [],
          icon: ""
        },
        isFetching: false,
        isPosting: true,
        error: ""
      };
    case POST_SUCCESS:
      return {
        ...state,
        deckInformation: [
          {
            deckName: action.payload
          }
        ],
        cards: [
          {
            front: action.payload,
            back: action.payload
          }
        ],
        deck: {
          tags: action.payload,
          icon: action.payload
        },
        isFetching: false,
        isPosting: false,
        error: ""
      };
    case POST_FAILURE:
      return {
        ...state,
        cards: [],
        deckInformation: [],
        deck: {},
        isFetching: true,
        isPosting: false,
        error: action.payload
      };
    case EDIT_CARDS:
      return {
        ...state,
        changes: [],
        isEditing: true,
        error: ""
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        changes: [
          {
            front: action.payload,
            back: action.payload,
            archived: action.payload
          }
        ],
        isEditing: false,
        error: ""
      };
    case EDIT_FAILURE:
      return {
        ...state,
        changes: [],
        isEditing: false,
        error: action.payload
      };
    case "ARCHIVE_SUCCESSFUL":
      return {
        ...state,
        decks: []
      };
    case POST_CARDS:
      return {
        ...state,
        cards: [],
        isFetching: false,
        isPosting: false,
        error: ""
      };
    case PCARDS_SUCCESS:
      return {
        cards: [
          {
            front: action.payload,
            back: action.payload
          }
        ],
        colId: action.payload,
        isFetching: false,
        isPosting: true,
        error: ""
      };
    case PCARDS_FAILURE:
      return {
        ...state,
        cards: [],
        isFetching: true,
        isPosting: false,
        error: action.payload
      };
    case PUBLIC_DECKS:
      return {
        ...state,
        publicDecks: []
      };

    default:
      return state;
  }
};

export default reducer;
