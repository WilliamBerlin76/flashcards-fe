import React from 'react';
import { Link } from 'react-router-dom';

export default function DeckMenu(props) {
  const actionType = 'archive';
  const type = 'deck';
  return (
    <div className='deck-menu'>
      <div>
        {props.unArchive ? (
          <Link to={`confirmation/${type}/${props.colId}/unarchive`}>
            Return to Decks
          </Link>
        ) : (
          <Link to={`confirmation/${type}/${props.colId}/${actionType}`}>
            Archive
          </Link>
        )}
      </div>
    </div>
  );
}
