import React, { useEffect, useState } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getCards } from '../../actions';
import poly from '../../assets/poly.png';
import smiley from '../../assets/smiley.png';
import { useHistory } from 'react-router-dom';
import './Cards.scss';

const Cards = props => {
  const [currentCard, setCurrentCard] = useState(0);
  const [deck, setDeck] = useState([]);
  const [sessionData, setSessionData] = useState({
    cardsCorrect: 0,
    cardsIncorrect: 0,
    cardsStudied: 0
  })

  useEffect(() => {
    props.getCards(props.match.params.deckName, props.match.params.user);
  }, []);

  useEffect(() => {
    if (props.deckcards) {
      let filteredCards = props.deckcards.filter(card => !card.data.archived);

      setDeck(filteredCards);
    }
  }, [props.deckcards]);

  let history = useHistory();

  const incrementCorrectCounters = (counter) => {
    setSessionData({...sessionData, counter:(counter+1)})
    console.log('sessionData',sessionData)
  }

  const goNext = () => {
    let index = currentCard;
    if (currentCard >= deck.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(index + 1);
    }
  };

  const goPrev = () => {
    let index = currentCard;
    if (currentCard <= 0) {
      setCurrentCard(deck.length - 1);
    } else {
      setCurrentCard(index - 1);
    }
  };

  if (!props.deckcards) {
    return (
      <div className='loading-background'>
        <h1 className='deckName-study'>{props.match.params.deckName}</h1>
        <div className='loader'>
          <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className='loading-background-study'>
          <div className='back-button-and-header-study'>
            <img
              className='back'
              src={poly}
              alt='back-arrow'
              onClick={() => history.goBack()}
            />
            <h1 className='deckNames-study' onClick={() => history.goBack()}>
              {props.match.params.deckName}
            </h1>
          </div>
          
          <div className='studied-cards-container'>
            <div className='studied-numbers'>
              <h4 className='listCards'>{deck.length}</h4>
              <img className='smile' src={smiley} alt={'a smiling emoji'} />
            </div>
      
            <div className='studied-text'>
              <h5 className='cardsHeader'>Cards</h5>
              <h4 className='mastered'>Mastered</h4>
            </div>
            {/* <div className = "rightside"> */}
          </div>
         
          {/* </div> */}
        </div>

        <div>
          {props.error && <p>{props.error}</p>}

          <Card
            key={deck.id}
            card={deck[currentCard]}
            goNext={goNext}
            goPrev={goPrev}
            incrementsCounter={incrementCorrectCounters}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    deckcards: state.deckcards,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCards })(Cards);
