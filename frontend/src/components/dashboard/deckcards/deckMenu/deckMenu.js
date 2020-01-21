import React from 'react';
import { Link } from 'react-router-dom';

export default function DeckMenu(props) {
  const actionType = 'archive';
  return (
    <div className='deck-menu'>
      <div>
        <Link to={`/${props.colId}/${actionType}`}>Archive</Link>
      </div>
    </div>
  );
}
