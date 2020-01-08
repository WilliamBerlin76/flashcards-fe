import React, { useEffect, useState } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getCards } from '../actions';


const Cards = props => {
    const [currentCard, setCurrentCard] = useState(0)

    useEffect(() => {
        console.log(props.cards.data)
        props.getCards(props.match.params.deckName);
    }, []);



 
    
    const goNext = () => {
    let index = currentCard;
        if(currentCard >= props.cards.length -1) {
            setCurrentCard(0);
        } else {
            setCurrentCard(index+1)
            console.log(currentCard)
        }
    };

    const goPrev = () => {
        let index = currentCard;
            if(currentCard <= 0) {
                setCurrentCard( props.cards.length - 1)
            } else {
                setCurrentCard(index-1)
            }
    };

    if (!props.cards) {
        return(

        <div>
            <h1>Your Cards!</h1>
                <Loading>
                <Loader type="ThreeDots" color="orange" height={80} width={80} />
                </Loading>
        </div>
        ) 
    } else {

    return(

        <div>
            <h1>Your Cards!</h1>


            <div>
            {props.error && <p>{props.error}</p>}

                 <Card key = {props.cards.id} card = {props.cards[currentCard]} goNext = {goNext} goPrev = {goPrev}
                 />

            </div>

          

        </div>
        
    )
}
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