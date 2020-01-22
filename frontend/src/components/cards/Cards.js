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

  useEffect(() => {
    console.log(props.match.params.deckName);
    props.getCards(props.match.params.deckName, props.match.params.user);
  }, []);

  let history = useHistory();

  const goNext = () => {
    let index = currentCard;
    if (currentCard >= props.cards.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(index + 1);
      console.log(currentCard);
    }
  };

  const goPrev = () => {
    let index = currentCard;
    if (currentCard <= 0) {
      setCurrentCard(props.cards.length - 1);
    } else {
      setCurrentCard(index - 1);
    }
  };

  if (!props.cards) {
    return (
      <div className='loading-background'>
        <h1 className='deckName'>{props.match.params.deckName}</h1>
        <div className='loader'>
          <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='page'>
        <div className='loading-background'>
          <img
            className='back'
            src={poly}
            alt='back-arrow'
            onClick={() => history.goBack()}
          />
          <h1 className='deckName'>{props.match.params.deckName}</h1>

          <h4 className='listCards'>{props.cards.length}</h4>
          <h4 className='cardsHeader'>Cards</h4>

          {/* <div className = "rightside"> */}
          <img className='smile' src={smiley} alt={'a smiling emoji'} />
          <h4 className='mastered'>Mastered</h4>
          {/* </div> */}
        </div>

        <div>
          {props.error && <p>{props.error}</p>}

          <Card
            key={props.cards.id}
            card={props.cards[currentCard]}
            goNext={goNext}
            goPrev={goPrev}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    cards: state.cards,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCards })(Cards);
