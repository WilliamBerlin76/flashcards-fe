import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { postCards, getCards } from '../../actions';
import './NewCard.scss'
import poly from '../../assets/poly.png';
import firebase from "firebase"
import DeckForm from '../decks/DeckForm';

const NewCard = (props) => {

    const [newName, setNewName] = useState( '');
    const [newDecks, setNewDecks] = useState([
        {    front: '', back: ''}
    ]);
    const [deck, setDeck] = useState([]);


    // const [currentCard, setCurrentCard] = useState(0)
  

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              let currentUser = firebase.auth().currentUser.uid;
            // setcurrentUser(firebase.auth().currentUser.uid);
            console.log(currentUser)
            props.getCards(props.match.params.deckName, currentUser);

          } else {
            return null
          }
        });  
      }, []);


    const handleChanges = (index, event) => {
        const values = [...newDecks]

        if(event.target.name === 'front') {
            values[index].front = event.target.value
         } else {
            values[index].back = event.target.value;
         } 

        setNewDecks(values);
    };


  
    const handleAdd = () => {
        const values = [...newDecks];
        values.unshift({ front: '', back: '' });
        setNewDecks(values);
    };
 
    const handleRemove = index => {
        const values = [ ...newDecks];
        values.splice(index, 1);
        setNewDecks(values);
    };

    const handleSubmit = e => {
        console.log(newDecks)
        e.preventDefault()
        props.postCards(newDecks)
        props.history.push(`/decklist`)
    };


    // const selectedTags  =  {tags}
    
    return(

        <div>
             <div className = "loading-background">
           <img className = "back"src = {poly} onClick ={() => props.history.goBack()}/>
            <h1 className = "deckName">Add Cards To {props.match.params.deckName}</h1>
           


            {/* <div className = "rightside"> */}
            <div className = "number">
            <h3 className = "smile">{newDecks.length}</h3>
            </div>
            <h4 className = "mastered">Total New Cards</h4>
            {/* </div> */}
        </div>

         <div>

        <div className = "page">




                    
                    {/* <h3 className = "deckInfo">Deck Info</h3> */}
                    <h1 className = "deckN">New Cards for  {props.match.params.deckName}</h1>
{/*                    
                    <h3 className = "flashcards">Flashcards</h3> */}
                    <div className = "form">
{/* 
                    <h3 className = "new">New Cards</h3>  */}
                    <div className = "buttonHolder">
                    <button
                    type = "button"
                    className = "add"
                    onClick = {() => handleAdd()}>
                        Add Card

                    </button>

                    <button
                    className = "save"
                    // onSubmit = {handleSubmit}
                    // onClick = {() => props.history.push(`/decklist`)}
                    onClick = {handleSubmit}
                    >
                    Save Deck
                    </button>
                    </div>

                    <form onSubmit = {handleSubmit} className = "cardForm">
                    {newDecks.map((newDeck, index) => (

                                 
                <Fragment key = {`${newDeck}~${index}`}>
                <div className = "card" >

                <div className = "removeHolder">
                            <button
                            type = "button"
                            className = "remove"
                            onClick = {() => handleRemove(index)}>
                                X
                            </button>              
                            </div>         

                    <label htmlFor = "front" className = "frontLabel">Front</label>
                    <textarea
                        className = "frontCard"
                        type = "text"
                        onChange = {event => handleChanges(index, event)}
                        name = "front"
                        // placeholder = "Term"
                        value = {newDeck.front}
                        multiline = {true}
                    />
                    

                    <div className = "backHolder">

                    <label htmlFor = "back" className = "backLabel">Back</label>
                    <textarea
                        className = "backCard"
                        type = "text"
                        onChange = {event => handleChanges(index, event)}
                        name = "back"
                        value = {newDeck.back}
                        // placeholder = "Definition"
                    />
                </div>
                

                </div>

    
                {/* <button
                type = "button"
                onClick = {() => handleAdd()}>
                    Add Card
                </button> */}
                </Fragment>

                ))}
             

                </form>

            
            </div>
           
                {/* <div>
                {props.deckcards.map(deck => {
                <DeckForm card={deck}/>
                })}

                </div> */}
           
            </div>
            </div>
            </div>
            )
    
};

const mapStateToProps = (state, props) => {
    return{
        deckcards: state.deckcards,
        isFetching: state.isFetching,
        error: state.error,
        
    }
};

export default connect(
    null,
    { postCards, getCards }
)(NewCard);