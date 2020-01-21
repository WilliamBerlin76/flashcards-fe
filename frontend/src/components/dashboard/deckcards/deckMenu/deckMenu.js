import React from 'react';
import { Link } from 'react-router-dom';

export default function DeckMenu(props) {
  const actionType = 'archive';
  const type = 'deck';
  return (
    <div className='deck-menu'>
      <div>
        <Link to={`/${type}/${props.colId}/${actionType}`}>Archive</Link>
      </div>
    </div>
  );
}
