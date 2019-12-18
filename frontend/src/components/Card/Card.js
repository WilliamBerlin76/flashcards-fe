import React from 'react';




const Card = (props) => {

    return(
        <>
        <h1>{props.card.word}</h1>
        <h1>{props.card.back}</h1>
        </>
    )
};


export default Card;