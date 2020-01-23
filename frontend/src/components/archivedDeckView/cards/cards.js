import React from 'react';

import './cards.scss';

const Cards = props => {

    return(
        <>
            <h4>front</h4>
                <p>{props.front}</p>
            <h4>back</h4>
                <p>{props.back}</p>
        </>
    )
}

export default Cards;