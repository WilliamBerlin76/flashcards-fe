import React from 'react';
import {Link} from 'react-router-dom';



const Card = (props) => {

    return(
        // <Link to = {`/decks/cards/${props.card.id}`}>
        <div>
        {/* <h1>{props.cards.deckName}</h1> */}
        <p>{props.front}</p>
        </div>
        // </Link>
    )
};


export default Card;