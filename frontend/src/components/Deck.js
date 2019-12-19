import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cards from './Cards/Cards'

const Deck = (props) => {

    return(
        <Link to = {`/deck/${props.deck.id}/cards`} >
        <TopCard>
            <h1>{props.deck.id}</h1>
        
            
        </TopCard>
        </Link>
    )
};

export default Deck;

const TopCard = styled.div`
    border: 1px solid black
    box-sizing: border-box
    width: 20%;
    height: 30%;
    background-color: whitesmoke;
    border-radius: 7px;
    margin-bottom: 5%;
    margin-left: 40%;
`