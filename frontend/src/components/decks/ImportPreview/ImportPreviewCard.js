import React, {useState} from 'react';

const ImportPreviewCard = props => {
    console.log('index', props.index)
    const [cardEditing, setCardEditing] = useState(props.card);
    const handleChanges = e => {
        const values = {...cardEditing}
        console.log('values before if', values)
        if (e.target.name === `front${props.index}`) {
            console.log('values in if', values)
            values.front = e.target.value;
          } else {
            console.log('values in else', values)
            values.back = e.target.value;
          }
      
          setCardEditing(values);
        
        // setCardEditing({...cardEditing, [e.target.name]: e.target.value})
    
    }

    const updateCard = () => props.setDeck([...props.deck, props.deck[props.index] = {front: cardEditing.front, back: cardEditing.back}])
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
            <button type='submit' >Save</button>
        </form>
    )
}

export default ImportPreviewCard;