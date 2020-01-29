import React from 'react';

import './cards.scss';

const Cards = props => {
  return (
    <div className='cards'>
      <h4 className='section-title'>front</h4>
      <div className='card-section top'>
        <p className='card-front'>{props.front}</p>
      </div>
      <h4 className='section-title'>back</h4>

      <div className='card-section bottom'>
        <p className='card-back'>{props.back}</p>
      </div>
    </div>
  );
};

export default Cards;
