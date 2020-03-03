import React, {useState} from 'react';
import ImportPreviewCard from './ImportPreviewCard';
import {connect} from 'react-redux';
import {postDecks} from '../../../actions';
import { useHistory } from 'react-router-dom'

const ImportPreview = (props) => {
    const [deck, setDeck] = useState(props.importedDeck);
    let history = useHistory()
    
const handleSubmit = () => {
    console.log('deck', deck);
    const subDeck = deck.filter(card => {
        return card.front && card.back;
    });
    console.log('subDeck', subDeck)
    props.postDecks(subDeck, props.title, props.tags, props.icon)
    setTimeout(()=>{
        history.push('/dashboard')
    }, 400)
}

    // props.setDeck([...props.deck, {[props.key] : {front: cardEditing.front, back: cardEditing.back}}])
    return (
        <div>
            {deck.length < 1 ? <p>Loading...</p>: null}
            {deck && deck.map((card, index)=>(
                <ImportPreviewCard deck={deck} setDeck={setDeck} key={index} index={index} card={card}/>
            ))}
            <button type='button' onClick={()=>handleSubmit()}>Create Deck</button>
            <button type='button' onClick={()=>history.push('/dashboard')}>Discard Deck</button>
        </div>
        
    )
}

export default connect(null, {postDecks})(ImportPreview)