import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'rc-progress';

import DeckMenu from './deckMenu/deckMenu';

import './deckcards.scss';

const DeckCards = props => {
  const [exampleCard, setExampleCard] = useState(null);
  const [deckLength, setDeckLength] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    console.log(props.deckName);
    axios
      .get(
        `https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${props.deckName}`
      )
      .then(res => {
        console.log(props);
        setExampleCard(res.data.data[0]);
        setDeckLength(res.data.data.length);
      });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!exampleCard) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div>
        <div className='menu-button'>
          <i className='fas fa-ellipsis-h' onClick={toggleMenu}></i>
        </div>
        {showMenu ? <DeckMenu colId={props.deckName} /> : null}
        <div className='deck' onClick={() => props.openDeck(props.deckName)}>
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
      </div>
    );
  }
};

export default DeckCards;
