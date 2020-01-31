import React from 'react';
import windowSize from 'react-window-size';
import graduate1 from '../../assets/graduate1.png';
import audio1 from '../../assets/audio1.png';
import notebook1 from '../../assets/notebook1.png';
import './footer.scss';

function Footer(props) {
  return (
    <div className='main-footer-div'>
      {props.windowWidth > 1000 ? (
        <div>
          {' '}
          <div className='header-footing-div'>
            <h3 className='header-footing-main'>Study Tips</h3>
            <h4 className='header-footing-sub'>and other bits</h4>
          </div>
          <div className='footer'>
            <div className='notebook-div'>
              <img src={notebook1} className='notebook' alt='notebook' />
              <p>What exactly is spaced-reptition and how it can help you</p>
            </div>
            <div className='earth-div'>
              <img
                src={graduate1}
                className='graduate'
                alt='earth with graduation cap'
              />
              <p>
                Harvard University is taking a new approach to learning using
                mNeme
              </p>
            </div>
            <div className='headphone-div'>
              <img src={audio1} className='headphones' alt='headphones' />
              <p>Discover what mNeme has in store for the future</p>
            </div>
          </div>{' '}
        </div>
      ) : null}
    </div>
  );
}

export default windowSize(Footer);
