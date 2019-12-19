import React, { useEffect } from 'react';
import Deck from './Deck';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

import { getDecks } from '../actions';


const DeckList = props => {

    useEffect(() => {
        props.getDecks();
    }, []);

    if (props.isFetching) {
        return <h1>Loading Your Decks!</h1>
    }

    return(
        
        <div>
            <h1>Your Decks!</h1>
            {props.error && <p>{props.error}</p>}
            {props.decks.map(deck =>(
                <Deck key = {deck.id} deck = {deck} />
            ))}
        </div>
       
    )
};

const mapStateToProps = state => {
    
    return {
        decks: state.decks,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    { getDecks }
)(DeckList);