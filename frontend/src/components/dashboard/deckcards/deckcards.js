import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'rc-progress';

import './deckcards.scss';

const DeckCards = props => {
  const [exampleCard, setExampleCard] = useState(null);
  const [deckLength, setDeckLength] = useState(0);

  useEffect(() => {
    console.log(props.deckName);
    axios
      .get(
        `https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${props.deckName}`
      )
      .then(res => {
        console.log(res);
        setExampleCard(res.data.data[0]);
        setDeckLength(res.data.data.length);
      });
  }, []);

  if (!exampleCard) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className='deck'>
        <div className='deck-card'>
          <div className='deck-info'>
            <h3 className='deck-name'>{props.deckName}</h3>
            <p className='deck-length'>{deckLength} cards</p>
          </div>
          <div className='example-card'>{exampleCard.data.front}</div>
        </div>
        <div className='mastery'>
          <h3>Mastery</h3>
          <Line
            percent='15'
            strokeWidth='1'
            strokeColor='#F66E00'
            className='mastery-line'
          />
          <p>3 Cards</p>
        </div>
      </div>
    );
  }
};

export default DeckCards;
