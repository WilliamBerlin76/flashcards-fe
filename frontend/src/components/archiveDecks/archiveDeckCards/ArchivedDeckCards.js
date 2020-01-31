import React, { useState } from 'react';
import { Line } from 'rc-progress';
import DeckMenu from '../../dashboard/deckcards/deckMenu/deckMenu';

import '../../dashboard/deckcards/deckcards.scss';

export default function ArchivedDeckCards(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!props.exampleCard) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className='deckcard-div'>
        <div className='menu-button'>
          <i className='fas fa-ellipsis-h' onClick={toggleMenu}></i>

          {showMenu ? (
            <DeckMenu unArchive={true} colId={props.deckName} />
          ) : null}
        </div>
        <div className='deck' onClick={() => props.openDeck(props.deckName)}>
          <div className='deck-card'>
            <div className='deck-info'>
              {props.icon ? (
                <h3 className='deck-name'>
                  {props.icon} {props.deckName}
                </h3>
              ) : (
                <h3 className='deck-name'>{props.deckName}</h3>
              )}
              <p className='deck-length'>{props.deckLength} cards</p>
            </div>
            <div className='example-card'>{props.exampleCard}</div>
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
}
