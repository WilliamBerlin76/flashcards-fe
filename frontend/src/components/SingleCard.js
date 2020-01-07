import React from 'react';
import Card from './Card';
import ReactCardFlip from 'react-card-flip';



class SingleCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false,

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    };

    // goRight = () => {
    //     let { currentCard, cards } = this.state;
    //     let index = currentCard;
    //     if (currentCard >= cards.length -1) {
    //         index = 0;
    //     } else {
    //         index++;
    //     }
    //     this.setState({
    //         currentCard: index
    //     })
    // };

    // goLeft = () => {
    //     let { currentCard, cards } = this.state;
    //     let index = currentCard;
    //     if (currentCard <= 0) {
    //         index = cards.length - 1;
    //     } else {
    //         index--;
    //     }
    //     this.setState({
    //         currentCard: index
    //     })
    // };

    render() {

        return (
            
         
           <>
         
         
             
           
            <ReactCardFlip isFlipped = {this.state.isFlipped} flipDirection = "horizontal"> 
        
                    <div className = "card__face card__face--front">
                        <button className = "cardstyle" onClick = {this.handleClick}>{this.props.front}</button>
                    </div>
        
                    <div className = 'card__face card__face--back'>
                        <button className = "cardstyle" onClick = {this.handleClick}>{this.props.back}</button>
                    </div>
        
            </ReactCardFlip>
          
            {/* <SingleCard
                cards = {cards}
                currentCard = {currentCard}
                previous = {this.goLeft}
                next = {this.goRight}
            /> */}

          </>
        )
    }
}

export default SingleCard;