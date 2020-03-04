import React, { useState, useEffect } from 'react';
import ImportPreviewCard from './ImportPreviewCard';
import { connect } from 'react-redux';
import { postDecks } from '../../../actions';
import { useHistory } from 'react-router-dom'

const ImportPreview = (props) => {
    const [deck, setDeck] = useState(props.importedDeck);
    let history = useHistory()
    const [checked, setChecked] = useState([]);
    const [updated, setUpdated] = useState([]);

    const handleSubmit = () => {
        // setState({});
        console.log('deck', deck);
        const subDeck = deck.filter(card => {
            return card.front && card.back;
        });
        console.log('subDeck', subDeck)
        props.postDecks(subDeck, props.title, props.tags, props.icon)
        setTimeout(() => {
            history.push('/dashboard')
        }, 400)
    }

    const checking = (cardId) => {
        if(checked.includes(cardId)) {
            setChecked(checked.filter(card => {
                return card.id !== cardId
            }))
        } else {
            setChecked([...checked, cardId])
        }
    }

    // const deleteCard = (cardId) => {
    //     // let values = deck;
    //     // // const card = values.splice(updateIndex, 1);
    //     // setDeck(deck.filter(item => {
    //     //     console.log(item.id)
    //     //     return item.id !== cardId
    //     // }));

    //     for(let i = 0; i < checked.length; i++) {
    //         for(let a = 0; a < deck.length; a++) {
    //             if(deck[a] !== checked[i]) {
    //                 setUpdated([...updated, deck[a]])
    //             }
    //             else {
    //                 return;
    //             }
    //         }
    //     }
    //     setDeck(updated);
    // }

    // props.setDeck([...props.deck, {[props.key] : {front: cardEditing.front, back: cardEditing.back}}])
    return (
        <div className='cards-container'>
            {deck.length < 1 ? <p>Loading...</p> : null}
            {deck ? deck.map((card, index) => (

                <ImportPreviewCard checking={checking} id={card.id} deck={deck} setDeck={setDeck} key={index} index={index} card={card} />

            )) : null}
            {/* <button type="button" onClick={deleteCard}>Delete Selected</button> */}
            <div className='create-btn'>
            <button type='button' onClick={() => handleSubmit()}>Create Deck</button>
            <button type='button' onClick={() => history.push('/dashboard')}>Discard Deck</button>
            </div>
        </div>

    )
}

export default connect(null, { postDecks })(ImportPreview)