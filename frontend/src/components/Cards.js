import React, { useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getCards } from '../actions';

const Cards = props => {

    useEffect(() => {
        props.getCards();
    }, []);

    if (props.isFetching) {
        return(
        // <>
        //     <h1>Your Decks!</h1>
        //     <h2>Loading Your Decks!</h2>
        // </>
        <div>
            <h1>Your Cards!</h1>
                <Loading>
                <Loader type="ThreeDots" color="orange" height={80} width={80} />
                </Loading>
        </div>
        ) 
    }

    return(

        <div>
            <h1>Your Cards!</h1>
            {props.error && <p>{props.error}</p>}
            {props.cards.map(card => (
                <Card key = {card.data.deckName} card = {card}
                 />
            ))}



        </div>
        
    )
};

const mapStateToProps = state => {
    return{
        cards: state.cards,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    { getCards }
)(Cards);

const Loading = styled.div`
    margin-top: 10%;
`