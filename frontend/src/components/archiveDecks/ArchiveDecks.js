import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import axios from 'axios';

import ArchivedDeckCards from './archiveDeckCards/ArchivedDeckCards';

export default function ArchiveDecks(props) {
  const [archived, setArchived] = useState([]);
  useEffect(() => {
    let currentUser = firebase.auth().currentUser.uid;
    axios
      .get(`http://localhost:5000/api/deck/${currentUser}/archive`)
      .then(res => {
        setArchived(res.data);
      });
  }, []);

  return (
    <div>
      <section className='study-data'>
        {/* <div className='timeline-selectors'>
          <span>Today</span>
          <span>This Week</span>
          <span>Lifetime</span>
        </div> */}
        <div className='studied'>
          <div className='numbers'>
            <span className='studied-number'>55</span>
            <span className='mastered-number'>15</span>
          </div>
          <div className='text'>
            <span className='studied-text'>Studied</span>
            <span className='mastered-text'>Mastered</span>
          </div>
        </div>
      </section>

      <section className='decks-section'>
        {archived.map(item => {
          return (
            <ArchivedDeckCards
              key={Math.random()}
              deckName={item.deckName}
              exampleCard={item.exampleCard}
              deckLength={item.deckLength}
            />
          );
        })}
      </section>
    </div>
  );
}
