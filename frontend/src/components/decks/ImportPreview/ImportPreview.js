import React, {useState} from 'react';
import ImportPreviewCard from './ImportPreviewCard';

const ImportPreview = (props) => {
    const [deck, setDeck] = useState(props.importedDeck);
    const [editing, setEditing] = useState(false);
    const [cardEditing, setCardEditing] = useState(null);
    const updateDeck = setDeck([...deck, {[deck[0]] : {front: cardEditing.front, back: cardEditing.back}}])
    return (
        <div>
            {deck.map((card, index)=>(
                <ImportPreviewCard key={index} front={card.front} back={card.back}/>
            ))}
        </div>
        

    )
}

export default ImportPreview