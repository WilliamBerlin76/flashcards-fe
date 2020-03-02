import React from 'react';

const ImportPreviewCard = props => {
    return (
        <form>
            <textarea 
                onChange={handleChange}
                name={`front${props.key}`}
                value={props.card.front}
            />
            <textarea

            />
        </form>
    )
}

export default ImportPreviewCard;