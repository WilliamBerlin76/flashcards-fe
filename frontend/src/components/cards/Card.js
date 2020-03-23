import React from 'react';

import './Card.css'
import ReactCardFlip from 'react-card-flip';
import Loader from 'react-loader-spinner';
import point from '../../assets/point.png';
import shineone from '../../assets/shineone.png';
import shinetwo from '../../assets/shinetwo.png';
import shinethree from '../../assets/shinethree.png';
import shinefour from '../../assets/shinefour.png';
import shinefive from '../../assets/shinefive.png';
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import './Cards.scss';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false,
            flipSpeedBackToFront: 0.001,
            flipSpeedFrontToBack: 0.001,
            desktopInstructor: true,
            flippedOnce: false,
            correct: null
           
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleGoNext = this.handleGoNext.bind(this);
        this.handleGoPrev = this.handleGoPrev.bind(this);
        this.changeCorrect = this.changeCorrect.bind(this);
        this.submitCardToSession = this.submitCardToSession.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped,
            flippedOnce: true
        }))
        
    };

    handleDeskInstructor = e => {
        e.preventDefault();
        this.setState({
            desktopInstructor: false
        })
    };
    handleGoNext = () => {
        

        this.setState(prevState => ({
            isFlipped: false,
            flippedOnce: false,

        }))
        setTimeout(() => {
            this.props.goNext();
        }, 200);
    };

    handleGoPrev = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isFlipped: false,
            flippedOnce: false
        }))
        setTimeout(() => {
            this.props.goPrev();
        }, 200);
    };

    changeCorrect = (e) => {

       

        if(e.target.id === "correct") {
            //  this.props.counter("cardsCorrect");
            this.props.setCardStatus(true);
            this.setState(prevState => ({
                correct: true
            }))
            document.getElementById("incorrect").style.filter = "none";
            e.target.style.filter = "invert(30%)";
            document.getElementById("correct").style.filter = "invert(30%)"


        } else {
            //this.props.counter("cardsIncorrect");
            this.setState(prevState => ({
                correct: false
            }))
            document.getElementById("correct").style.filter = "none";
            e.target.style.filter = "invert(30%)";
             document.getElementById("incorrect").style.filter = "invert(30%)";

        }
    }; 

    submitCardToSession = () => {  
        
        if (this.state.correct === true) {
            console.log(this.state.correct)
            this.props.counter('cardsCorrect');
        } else if (this.state.correct === false) {
            this.props.counter('cardsIncorrect');
        } else {return null}
        this.props.counter('cardsStudied');
        this.setState(prevState=>({correct: null}))        
    }

    render() {
        if (!this.props.card) {
            return    (       
            <div className = "loader">

                <Loader type="ThreeDots" color="#F66E00" height={80} width={80} />

            </div>
            )
        } else {

        

        return (
            
           <div className = "container">
                <div className='card-section'>
                    <ReactCardFlip isFlipped = {this.state.isFlipped} flipDirection = "horizontal"> 
                        
                        <div className = "card__face card__face--front">
                            <button 
                                className = "cardstyle" 
                                onClick = {this.handleClick}
                            >{this.props.card.data.front}</button>
                        </div>

                        <div className = 'card__face card__face--back'>
                            <button 
                                className = "cardstyle-back" 
                                onClick = {this.handleClick}
                            >{this.props.card.data.back}</button>
                            
                        </div>
                        

                    </ReactCardFlip>
                {this.state.desktopInstructor ? 
                    <div className='desktop-instructor'>
                        <i className="fas fa-times" onClick={this.handleDeskInstructor}></i>
                        <i className="fas fa-mouse-pointer"></i>
                        <p>Click card to flip</p>
                    </div> : null
                }
                    
                </div>
                
            <div className='tap-instructor'>
                <p className = "instruct">Tap card to flip</p>
                    <div className = "shineholder">
                        <img className = "shineone" src = {shineone} alt = {'shine'} />
                        <img className = "shinetwo" src = {shinetwo} alt = {'shine'} />
                        <img className = "shinethree" src = {shinethree} alt = {'shine'} />
                        <img className = "shinefour" src = {shinefour} alt = {'shine'} />
                        <img className = "shinefive" src = {shinefive} alt = {'shine'} />
                    </div>
                <img className = "point" src = {point} alt = {'finger pointing'} />
            </div>




            <div className="thumbs-container">
                {this.state.flippedOnce ? <><img  src={like} onClick={this.changeCorrect} id="correct" value="some yay" className="thumbs"/>
                
                <img src={dislike} className="thumbs" onClick={this.changeCorrect} id="incorrect" value="some nay"/></>: null  }
                </div>


            <div className = "button-holder">
              
                {/* <button className = "previous" onClick = {this.handleGoPrev, this.submitCardToSession}>Previous</button> */}


                <button className="previous">Finish</button>
                {this.state.correct === null ? <button className = "previous" disabled>Next</button> : <button className = "previous" onClick={(e)=>{
                    e.preventDefault();
                    this.submitCardToSession()
                    this.handleGoNext() 
                }}>Next</button>}
            </div>
            
          </div>
        )
    }
}

};

export default Card;


