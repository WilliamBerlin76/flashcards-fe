import React from 'react';



// const initialDeck = [
//     {
//         id: 0,
//         name: 'Starter Deck'
//     },
//     {
//         id: 1,
//         name: 'Starter Deck 2'
//     }
// ]


const Deck = (props) => {

    return(
        <div>
            <h1>{props.deck.name}</h1>
        </div>
    )
};

export default Deck;