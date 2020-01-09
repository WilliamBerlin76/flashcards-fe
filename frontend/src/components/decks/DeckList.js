import React, { useEffect } from 'react';
import Deck from './Deck';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getDecks } from '../../actions';


const DeckList = props => {

    useEffect(() => {
        props.getDecks();
    }, []);

    if (props.isFetching) {
        return(
        // <>
        //     <h1>Your Decks!</h1>
        //     <h2>Loading Your Decks!</h2>
        // </>
        <div>
            <h1>Your Decks!</h1>
                <Loading>
                <Loader type="ThreeDots" color="orange" height={80} width={80} />
                </Loading>
        </div>
        ) 
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

const Loading = styled.div`
    margin-top: 10%;
`