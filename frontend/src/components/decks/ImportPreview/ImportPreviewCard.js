import React, {useState} from 'react';

const ImportPreviewCard = props => {

    // console.log('index', props.index)
    const [cardEditing, setCardEditing] = useState(props.card);
    const handleChanges = e => {
        const values = {...cardEditing}
        if (e.target.name === `front${props.index}`) {
            values.front = e.target.value;
          } else {
            values.back = e.target.value;
          }
          setCardEditing(values);
    }

    const deleteCard = (index) => {
        let values = [...props.deck];
        values.splice(index, 1);
        props.setDeck(values);
        console.log('values', values);
    }

    const updateCard = () => {
        props.setDeck([...props.deck, props.deck[props.index] = {front: cardEditing.front, back: cardEditing.back}])
        console.log(props.deck);
    };
    
    
    return (
        <form onSubmit={(e)=>{e.preventDefault(); updateCard()}}>
            <textarea 
                onChange={handleChanges}
                name={`front${props.index}`}
                value={cardEditing.front}
            />
            <textarea
            onChange={handleChanges}
            name={`back${props.index}`}
            value={cardEditing.back}
            />
            <button type='button' id={props.index} onClick={()=>{deleteCard(props.index)}}>Delete</button>
            <button type='submit' >Save</button>
        </form>
    )
}

export default ImportPreviewCard;