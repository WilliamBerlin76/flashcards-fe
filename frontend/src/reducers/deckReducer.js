export const initialState = {
    decks: [
        {
            deck: 'Starter Deck',
            id: 1
        }
    ]
}

export const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_DECK' :
            return {
                decks: [
                    ...state.decks,
                    {
                        deck: action.payload,
                        id: Date.now()
                    }
                ]
            }

        default:
            return state;
    }
}