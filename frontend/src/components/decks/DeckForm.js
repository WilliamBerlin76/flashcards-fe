import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { postDecks } from '../../actions';


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

            <div>
                <form onSubmit = {handleSubmit}>
                    <input
                        type = "text"
                        onChange = {handleName}
                        name = "colId" 
                        placeholder = "Deck Name" 
                    />

                    <div>
                            <button
                            type = "button"
                            onClick = {() => handleAdd()}>
                                Add Card
                            </button>
                   
                            <button
                             onSubmit = {handleSubmit}
                            >
                             Save Deck
                            </button>
                    </div>

                    {newDecks.map((newDeck, index) => (
                        <Fragment key = {`${newDeck}~${index}`}>
                            <div>

                                <label htmlFor = "front">Front of Card</label>
                                <input
                                    type = "text"
                                    onChange = {event => handleChanges(index, event)}
                                    name = "front"
                                    placeholder = "Term"
                                    value = {newDeck.front}
                                />

                                <label htmlFor = "back">Back of Card</label>
                                <input
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

                            {/* <button
                            type = "button"
                            onClick = {() => handleAdd()}>
                                Add Card
                            </button> */}
                        </Fragment>
                    ))}

                            {/* <button
                            type = "button"
                            onClick = {() => handleAdd()}>
                                Add Card
                            </button>
                    */}
                   {/* Uncomment when saving deck is possible */}
                    <button
                        
                        onSubmit = {handleSubmit}
                    >
                    Save Deck
                    </button>

                </form>



            </div>

        </div>
        
    )
};

export default connect(
    null,
    { postDecks }
)(DeckForm);