import React from 'react';
import { Link } from 'react-router-dom';

import './deckMenu.scss';

export default function DeckMenu(props) {
  const actionType = 'archive';
  const type = 'deck';
  return (
    <div className='deck-menu'>
      <div>
        {props.unArchive ? (
          <Link
            className='menu-link'
            to={`confirmation/${type}/${props.colId}/unarchive`}
          >
            Return to Decks
          </Link>
        ) : (
          <Link
            className='menu-link'
            to={`confirmation/${type}/${props.colId}/${actionType}`}
          >
            Archive
          </Link>
        )}
        <Link
          className='menu-link'
          to={`confirmation/${type}/${props.colId}/unarchive`}
        >
          Return to Decks
        </Link>
      </div>
    </div>
  );
}
