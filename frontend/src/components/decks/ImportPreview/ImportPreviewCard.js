import React, {useState} from 'react';

const ImportPreviewCard = props => {
    
    const [cardEditing, setCardEditing] = useState({front: props.card.front, back: props.card.back});
    const handleChanges = e => setCardEditing({...cardEditing, [e.target.name]: e.taget.value})

    const updateCard = () => props.setDeck(...props.deck, {[props.key]: {front: cardEditing.front, back: cardEditing.back}})
    return (
        <form>
            <textarea 
                onChange={handleChanges}
                name={`front${props.key}`}
                value={cardEditing.front}
            />
            <textarea
            onChange={handleChanges}
            name={`back${props.key}`}
            value={cardEditing.back}
            />
            <button type='button' onClick={(e)=>{e.preventDefault(); updateCard()}}>Save</button>
        </form>
    )
}

export default ImportPreviewCard;