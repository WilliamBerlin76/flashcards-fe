import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Progress } from 'semantic-ui-react'
import { getCards, getDecks } from '../../actions';
import 'semantic-ui-css/semantic.min.css'
import cardPlaceholder from './cardPlaceholder.png';
import './DeckList.scss';


const Deck = (props) => {


  useEffect(() => {
    // props.getCards(); 
    // console.log(props.deck.data)
    
      
  }, []);

    return(
        <div className = "container">
            <div className = "deckin">
                <div className = "topSection">   
                    <div className = "deckText">   
                        <Link to = {`/cards/${props.deck}/cards`} >
                        <TopCard>
                            <Words>{props.deck}  </Words>
                            <p className = "cardNum">10 cards</p>
                            
                        </TopCard>
                        </Link>
                        {/* <p className = "cardNum">{props.cards.length} cards</p> */}
                        
                    </div>
                    <img className = "cardplaceholder" src = {cardPlaceholder} alt = {'picture of flashcard from deck'}/>
                </div>
                <div className='masteryBar'>
                    <h4>Mastery</h4>
                    <Progress percent={5} size='tiny' color='orange' text-align='left'>
                        <p>3 Cards</p>
                    </Progress>
                </div>
            </div>
        </div>


    )
};

export default Deck;

const TopCard = styled.div`
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 35%;
    color: black;
`

const Words = styled.h3`
    text-decoration: none;
    // text-align: left;
    margin-bottom: 4%;

`
