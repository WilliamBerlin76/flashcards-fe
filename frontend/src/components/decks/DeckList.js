import React, { useEffect } from 'react';
import firebase from 'firebase';
import DeckCards from '../dashboard/deckcards/deckcards';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getDecks } from '../../actions';
import smileyface from './smileyface.png';
import './DeckList.scss';

const DeckList = props => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let currentUser = firebase.auth().currentUser.uid;
        props.getDecks(currentUser);
        // console.log(props.cards)
      } else {
        return null;
      }
    });
  }, []);

  const openDeck = (deck, user) => {
    props.history.push(`/${user}/${deck}/cards`);
  };

  if (props.isFetching) {
    return (
      // <>
      //     <h1>Your Decks!</h1>
      //     <h2>Loading Your Decks!</h2>
      // </>
      <div>
        {/* <h1>Your Decks!</h1> */}
        <Loading>
          <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
        </Loading>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='dash'>
        {/* <div className='dashNav deck'> 
                    <p>Today</p>
                    <p>This Week</p>
                    <p>Lifetime</p>
                    </div> */}
        <div className='deckNav'>
          <p className='subtitle1'>
            Explore our Demo deck, create your own or search new decks
          </p>
          <p className='subtitle2'>Start mastering with mNeme!</p>
          <img className='smile' src={smileyface} alt={'smiley face emoji'} />
        </div>
      </div>
      <div className='deckLink'>
        <p className='recentDeck'>Recent Deck</p>
        <p className='allDeck'>All Decks</p>
      </div>
      <div className='deckList'>
        {props.error && <p>{props.error}</p>}
        {props.decks ? props.decks.map(deck => (
          <DeckCards
            key={Math.random()}
            demo={deck.demo}
            deckName={deck.deckName}
            openDeck={openDeck}
          />
        )) : 
        <Loading>
          <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
        </Loading> }
      </div>
      {/* <div className = "button">
                <button className = "btn1">Create</button>
                <button className = "btn2" >Update Settings</button>
                </div> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    decks: state.decks,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDecks })(DeckList);

const Loading = styled.div`
  margin-top: 10%;
`;