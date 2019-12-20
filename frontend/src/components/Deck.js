import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { getCards } from '../actions';
import Loader from 'react-loader-spinner';
import { database } from 'firebase';

const Deck = (props) => {

    // useEffect(() => {
    //     props.getCards();
    // }, []);

    return(
        <Link to = {`/cards/${props.deck}/cards`} >
        <TopCard>
            <Words>{props.deck}</Words>
            {/* <Cards  /> */}
            
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

    color: black;
`

const Words = styled.h1`
    text-decoration: none;
`