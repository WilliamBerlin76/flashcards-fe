import React, { useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getCards } from '../actions';

const Cards = props => {
    useEffect(() => {
        console.log(props.cards.data)
        props.getCards(props.match.params.deckName);
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
                <Card key = {card.id} card = {card} front = {card.data.front} deckName = {card.deckName}
                 />
            ))}



        </div>
        
    )
};

const mapStateToProps = (state, props) => {
    return{
        cards: state.cards,
        isFetching: state.isFetching,
        error: state.error,
        
    }
};

export default connect(
    mapStateToProps,
    { getCards }
)(Cards);

const Loading = styled.div`
    margin-top: 10%;
`