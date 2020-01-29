import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import DashNav from '../dashNav/dashNav';
import DeckCards from './deckcards/deckcards.js';
import { getDecks, getCards } from '../../actions';
import { connect } from 'react-redux';
import './dashboard.scss';


const Dashboard = props => {
  const [deckArr, setDeckArr] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let user = firebase.auth().currentUser.uid;
        props.getDecks(user);
        console.log(props.decks);
      } else {
        return null
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

        {deckArr.map(item => {
          console.log(item);
          return <DeckCards key={item} demo = {item.demo} deckName={item.deckName} openDeck={openDeck} />;
        })}
      </section>
      {/* <button className='bottom-button'>Create</button> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.cards,
    decks: state.decks,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDecks, getCards })(Dashboard);
