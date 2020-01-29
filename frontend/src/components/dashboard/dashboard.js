import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import DeckCards from './deckcards/deckcards.js';
import { getDecks, getCards } from '../../actions';
import { connect } from 'react-redux';
import './dashboard.scss';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Loading = styled.div`
  margin-top: 10%;
  text-align: center;
`;


const Dashboard = props => {
  const [deckArr, setDeckArr] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let user = firebase.auth().currentUser.uid;
        props.getDecks(user);
      } else {
        return null;
      }
    });
  }, []);

  useEffect(() => {
    setDeckArr(props.decks);
  }, [props.decks]);

  const openDeck = (deck, user) => {
    props.history.push(`/${user}/${deck}/cards`);
  };

  return (
    <>
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
        {/* <div className='decks-selectors'>
          <span>Recent Decks</span>
          <span>All Decks</span>
        </div> */}

        {deckArr.length === 0 ? (
          <div>
            <Loading>
              <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
            </Loading>
          </div>
        ) : (
          deckArr.map(item => {
            return (
              <DeckCards
                key={Math.random()}
                demo={item.demo}
                deckName={item.deckName}
                openDeck={openDeck}
              />
            );
          })
        )}
      </section>
      <button
        className='bottom-button'
        onClick={() => props.history.push('/create-deck')}
      >
        Create Deck
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.deckcards,
    decks: state.decks,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDecks, getCards })(Dashboard);
