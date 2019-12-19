import React from 'react';
import {Link} from 'react-router-dom';



const Card = (props) => {

    return(
        <Link to = {`/decks/cards/${props.card.id}`}>
        <h1>{props.card.word}</h1>
        <h1>{props.card.back}</h1>
        </Link>
    )
};


export default Card;