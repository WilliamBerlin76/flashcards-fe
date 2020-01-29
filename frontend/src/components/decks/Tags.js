import React from 'react';

const Tags = props => {
  //TAGS

  return (
    <div className='tags-input'>
      <ul id='tags'>
        {props.tags.map((tag, index) => (
          <li key={index} className='tag'>
            <span className='tag-title'>{tag}</span>
            <span
              className='tag-close-icon'
              onClick={() => props.removeTags(index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <input
        className='tagss'
        type='text'
        placeholder='Add tags to make searching easier'
        onKeyUp={event => (event.key === 'Enter' ? props.addTags(event) : null)}
      />
    </div>
  );
};

export default Tags;
