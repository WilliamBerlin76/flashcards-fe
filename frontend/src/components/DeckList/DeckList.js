import React from 'react';
import Deck from '../Deck/Deck';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

const DeckList = props => {


    return(
        
        <div>
            <h1>Your Decks!</h1>
            {props.deckInfo.map(deck =>(
                <Deck key = {deck.id} deck = {deck} />
            ))}
        </div>
       
    )
};

const mapStateToProps = state => {
    
    return {
        deckInfo: state.deckInfo,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    
)(DeckList);