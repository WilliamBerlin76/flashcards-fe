import React from 'react';
import styled from 'styled-components';
import './Card.css'
import ReactCardFlip from 'react-card-flip';


class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    };

    render() {

        return (
            
            <ReactCardFlip isFlipped = {this.state.isFlipped} flipDirection = "horizontal">
        
                    <div className = "card__face card__face--front">
                        <button className = "cardstyle" onClick = {this.handleClick}>{this.props.front}</button>
                    </div>
        
                    <div className = 'card__face card__face--back'>
                        <button className = "cardstyle" onClick = {this.handleClick}>{this.props.back}</button>
                    </div>
        
            </ReactCardFlip>
        )
    }
}

// const Card = (props) => {

//     var card =
//     document.getElementById('.card');

//     card.addEventListener('click', 
//     function(){
//        card.toggleClassName('is-flipped')
//     });

//     return(
      
//         <div id = "card">
        
//             <div className = "card__face card__face--front">
//             {props.front}
//             </div>

//             <div className = 'card__face card__face--back'>
//                 <p>{props.back}</p>
//             </div>

//         </div>
  
//     )
// };


export default Card;

// const Cardcolor = styled.div`
//     background-color: grey;
//     box-sizing: border-box;
//     margin-left: 10%;
//     margin-right: 16%; 
// `