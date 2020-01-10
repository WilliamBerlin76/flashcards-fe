import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './DeckList.scss';


const Deck = (props) => {

//   const [deckLength, setDeckLength] = useState(0);

  useEffect(() => {
    // console.log(props.deck.data)
    
      
  }, []);

    return(
        <div className = "container">
        <div className = "deckin">
        <Link to = {`/cards/${props.deck}/cards`} >
        <TopCard>
            <Words>{props.deck}</Words>
            
            
        </TopCard>
        </Link>
        {/* <p className = "cardNum">{deckLength} cards</p> */}
        {/* <img className = "cardplaceholder" src = {cardface} alt = {'picture of flashcard from deck'}/> */}
        <div className='masteryBar'>
        <h4>Mastery</h4>
        <Progress percent={5} size='tiny'>
         Cards
        </Progress>
        </div>
        </div>
        </div>


    )
};

export default Deck;

const TopCard = styled.div`
    // width: 50%;
    // height: 60%;
    // background-color: #E5E5E5;
    // border: 0.5px solid #F66E00;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 35%;
    color: #6A5C55;
`

const Words = styled.p`
    text-decoration: none;
    text-align: center;
    
`