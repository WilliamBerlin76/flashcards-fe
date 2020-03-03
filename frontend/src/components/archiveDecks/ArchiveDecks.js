import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import ArchivedDeckCards from './archiveDeckCards/ArchivedDeckCards';

import './archiveDecks.scss';

const Loading = styled.div`
  margin-top: 10%;
  text-align: center;
`;

export default function ArchiveDecks(props) {
  const [archived, setArchived] = useState([]);
  const [noArchived, setNoArchived] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let currentUser = firebase.auth().currentUser.uid;
        axios
          .get(
            `https://flashcards-be.herokuapp.com/api/deck/${currentUser}/archive`
          )
          .then(res => {
            console.log(res);
            setArchived(res.data);
            setLoading(false);
            if (res.data.length === 0) {
              setNoArchived(true);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        return null;
      }
    });
  }, []);

  const openDeck = collectionId => {
    props.history.push(`/archived-decks/${collectionId}`);
  };

  if (noArchived) {
    return (
      <div className='no-archived'>
        <p>You have no decks currently archived!</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <Loading>
          <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
        </Loading>
      </div>
    );
  }

  return (
    <div>
      {/* <section className='study-data'>
        <div className='timeline-selectors'>
          <span>Today</span>
          <span>This Week</span>
          <span>Lifetime</span>
        </div> 
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
      </section> */}

      <section className='decks-section'>
        {archived.map(item => {
          return (
            <ArchivedDeckCards
              key={Math.random()}
              deckName={item.deckName}
              exampleCard={item.exampleCard}
              deckLength={item.deckLength}
              openDeck={openDeck}
              icon={item.icon}
            />
          );
        })}
      </section>
    </div>
  );
}
