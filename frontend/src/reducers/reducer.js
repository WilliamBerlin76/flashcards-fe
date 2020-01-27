import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_CARDS,
  CARDS_SUCCESS,
  CARDS_FAILURE,
  POST_DECK,
  POST_SUCCESS,
  POST_FAILURE
} from '../actions';

const initialState = {
  decks: [],
  deckcards: [],
  isFetching: false,
  error: '',
  isPosting: false,
  cards: [
    {
      front: '',
      back: ''
    }
  ],
  deckInformation: [
    {
      deckName: ''
    }
  ],
  deck: {
    tags: [],
    icon: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
          icon: ''
        },
        isFetching: false,
        isPosting: true,
        error: ''
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
        error: ''
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
    case 'ARCHIVE_SUCCESSFUL':
      return {
        ...state,
        decks: []
      };
    default:
      return state;
  }
};

export default reducer;
