import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';


const Cards = props => {

    return(

        <div>
            <h1>Your first card</h1>
            {props.cardInfo.map(card => (
                <Card key = {card.id}
                card = {card} back = {card.back}/>
            ))}



        </div>
        
    )
};

const mapStateToProps = state => {
    return{
        cardInfo: state.cardInfo,
    }
};

export default connect(
    mapStateToProps
)(Cards);