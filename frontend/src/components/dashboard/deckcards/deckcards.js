import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'rc-progress';
import firebase from "firebase"
import './deckcards.scss';

const DeckCards = props => {
  const [exampleCard, setExampleCard] = useState(null);
  const [deckLength, setDeckLength] = useState(0);
  const [user, setUser] = useState(null);
 
  // useEffect(() => {
  //   console.log(props.deckName);
  //   axios
  //     .get(
  //       `https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${props.deckName}`
  //     )
  //     .then(res => {
  //       console.log(props);
  //       setExampleCard(res.data.data[0]);
  //       setDeckLength(res.data.data.length);
  //     });
  // }, []);

  useEffect(() => {
    // let currentUser = firebase.auth().currentUser.uid;
    let currentUser = firebase.auth().currentUser.uid;
    if (props.demo) {
      axios
        .get(
          `https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${props.deckName}`
        )
        .then(res => {
          // console.log(card)
          let card = res.data.data[0];
          setExampleCard(card.data.front);
          setDeckLength(res.data.data.length);
          setUser('demo');
        });
    } else {
      axios
        .get(`https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${props.deckName}`)
        .then(res => {
          setExampleCard(res.data.deckInformation.exampleCard);
          setDeckLength(res.data.deckInformation.deckLength);
          setUser(currentUser);
        });
    }
  }, []);

  if (!exampleCard) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className='deck' onClick={() => props.openDeck(props.deckName)}>
        <div className='deck-card'>
          <div className='deck-info'>
            <h3 className='deck-name'>{props.deckName}</h3>
            <p className='deck-length'>{deckLength} cards</p>
          </div>
          <div className='example-card'>{exampleCard}</div>
        </div>
        <div className='mastery'>
          <h3>Mastery</h3>
          <Line
            percent='15'
            strokeWidth='1'
            strokeColor='#F66E00'
            className='mastery-line'
          />
          <p>3 Cards</p>
        </div>
      </div>
    );
  }
};

export default DeckCards;
