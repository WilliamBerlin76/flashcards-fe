import React from 'react';
import { Link } from 'react-router-dom';

import './deckMenu.scss';

export default function DeckMenu(props) {
  const type = 'deck';
  return (
    <div className='deck-menu'>
      <div>
        {props.unArchive ? (
          <>
          <Link
            className='menu-link'
            to={`confirmation/${type}/${props.colId}/unarchive`}
          >
            Return to Decks
          </Link>
          
          <Link className='menu-link' to={`confirmation/${type}/${props.colId}/deleteArchived`}>Delete</Link>
          </>
        ) : (
          <>
            <Link
              className='menu-link'
              to={`confirmation/${type}/${props.colId}/archive`}
            >
              Archive
            </Link>
            <Link
              className='menu-link'
              to={`/editcard/${props.colId}`}
            >
              Edit
            </Link>
            <Link
              className='menu-link'
              to={`confirmation/${type}/${props.colId}/delete`}
            >
              Delete
            </Link>
            {/* <Link
              className='menu-link'
              to={`editcard/${props.colId}/newcards`}
            >
              Add Cards
            </Link> */}
          </>
        )}
      </div>
    </div>
  );
}
