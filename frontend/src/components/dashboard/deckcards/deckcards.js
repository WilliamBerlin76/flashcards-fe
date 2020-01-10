import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeckCards = props => {
  const [exampleCard, setExampleCard] = useState(null);
  const [deckLength, setDeckLength] = useState(0);

  useEffect(() => {
    console.log(props.deckName)
    axios
      .get(`https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${props.deckName}`)
      .then(res => {
        console.log(res);
        setExampleCard(res.data.data[0]);
        setDeckLength(res.data.data.length)
      })
  }, []);

  if (!exampleCard) {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  } else {
    return (
      <div className='deck-card'>
        <h3>{props.deckName}</h3>
        <p>{exampleCard.data.front}</p>
        <p>{deckLength}</p>
      </div>
    )
  }
}


export default DeckCards;