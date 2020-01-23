import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { postDecks } from '../../actions';
import './DeckForm.scss'
import {TextField, Input} from '@material-ui/core'; 


const DeckForm = (props) => {

    const [newName, setNewName] = useState({ colId: ''});
    const [newDecks, setNewDecks] = useState([
        {    front: '', back: ''}
    ]);
    // const [currentCard, setCurrentCard] = useState(0)
  

    const handleChanges = (index, event) => {
        const values = [...newDecks]

        if(event.target.name === 'front') {
            values[index].front = event.target.value
         } else {
            values[index].back = event.target.value;
         } 

        setNewDecks(values);
    };

    const handleName = (e) => {
        let name = e.target.name
        setNewName({
            ...newName,
            [name] : e.target.value
        })
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

    // const handleButton = e => {
    //     e.preventDefault();
    // };


    const handleSubmit = e => {
        console.log(newDecks, newName)
        e.preventDefault()
        props.postDecks(newDecks, newName)
    };



    return(

        <div>
        <h1>Create Your New Deck</h1>

        <div className = "page">
        <div className = "buttonHolder">
        <button
        type = "button"
        className = "add"
        onClick = {() => handleAdd()}>
            Add Card

        </button>

        <button
        className = "save"
        onSubmit = {handleSubmit}
        onClick = {() => props.history.push(`/decklist`)}
        >
        Save Deck
        </button>
        </div>
        

            <div>
                <form onSubmit = {handleSubmit} className = "cardForm">
                    
                    <h3 className = "deckInfo">Deck Info</h3>

                    <TextField label = 'Deck Name' >
                    <input
                    
                        className = "mdc-text-field"
                        type = "text"
                        onChange = {handleName}
                        name = "colId" 
                        placeholder = "Deck Name" 
                    />
                    </TextField>
                    
                    <h3 className = "new">New Card</h3> 

                    {newDecks.map((newDeck, index) => (

                                 
                        <Fragment key = {`${newDeck}~${index}`}>
                            <div className = "card" >
                          
                                                     

                                <label htmlFor = "front" className = "frontLabel">Front</label>
                                <input
                                    className = "frontCard"
                                    type = "text"
                                    onChange = {event => handleChanges(index, event)}
                                    name = "front"
                                    placeholder = "Term"
                                    value = {newDeck.front}
                                />
                                

                                <div className = "backHolder">
                            
                                <label htmlFor = "back" className = "backLabel">Back</label>
                                <input
                                    className = "backCard"
                                    type = "text"
                                    onChange = {event => handleChanges(index, event)}
                                    name = "back"
                                    value = {newDeck.back}
                                    placeholder = "Definition"
                                />
                             </div>
                             <button
                            type = "button"
                            onClick = {() => handleRemove(index)}>
                                Remove This Card
                            </button>

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
 

            </div>


        </div>


    )

};

export default connect(
    null,
    { postDecks }
)(DeckForm);