import React, {useState} from 'react';
import ImportPreviewCard from './ImportPreviewCard';

const ImportPreview = (props) => {
    const [deck, setDeck] = useState(props.importedDeck);

    // props.setDeck([...props.deck, {[props.key] : {front: cardEditing.front, back: cardEditing.back}}])
    return (
        <div>
            {deck.length < 1 ? 'Loading..': null}
            {deck.map((card, index)=>(
                <ImportPreviewCard deck={deck} setDeck={setDeck} key={index} card={card}/>
            ))}
        </div>
        
    )
}

export default ImportPreview