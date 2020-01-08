import React from 'react';

import './Card.css'
import ReactCardFlip from 'react-card-flip';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false,

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleGoNext = this.handleGoNext.bind(this);
        this.handleGoPrev = this.handleGoPrev.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    };

    handleGoNext = (e) => {
        console.log(e)
        e.preventDefault();
        this.props.goNext();
        this.setState(prevState => ({
            isFlipped: false
        }))
    };

    handleGoPrev = (e) => {
        console.log(e)
        e.preventDefault();
        this.props.goPrev();
        this.setState(prevState => ({
            isFlipped: false
        }))
    };
    render() {
        if (!this.props.card) {
            return                 <Loading>
            <Loader type="ThreeDots" color="orange" height={80} width={80} />
            </Loading>
        } else {

        

        return (
            
         
           <>

            <ReactCardFlip isFlipped = {this.state.isFlipped} flipDirection = "horizontal"> 
        
                    <div className = "card__face card__face--front">
                        <button className = "cardstyle" onClick = {this.handleClick}>{this.props.card.data.front}</button>
                    </div>
        
                    <div className = 'card__face card__face--back'>
                        <button className = "cardstyle" onClick = {this.handleClick}>{this.props.card.data.back}</button>
                    </div>
        
                   
            </ReactCardFlip>

            <button onClick = {this.handleGoPrev}>PREVIOUS</button>
            <button onClick = {this.handleGoNext}>NEXT</button>

          </>
        )
    }
}
};


export default Card;

const Loading = styled.div`
    margin-top: 10%;
`

