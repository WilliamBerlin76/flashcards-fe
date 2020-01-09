import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import DashNav from '../dashNav/dashNav';
import axios from 'axios'

import './profileSettings.scss';
const Settings = props => {
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    console.log(firebase.auth().currentUser.photoURL);
    axios.get(`https://flashcards-be.herokuapp.com/api/users/${firebase.auth().currentUser.uid}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log('get user err', err)
      })
  }, []);

  const nonCheckChange = e => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value
    });
  };

  const radioChange = e => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    axios.put(`https://flashcards-be.herokuapp.com/api/users/${firebase.auth().currentUser.uid}`, {changes: preferences})
      .then(res => {
        props.history.push('/dashboard')
      })
      .catch(err => {
        console.log('put err', err)
      })
  };

  return (
    <>
      <div className='settings-header-container'>
        <div className='name-pic-container'>
          <h2>{firebase.auth().currentUser.displayName}</h2>
          <img src={firebase.auth().currentUser.photoURL} alt='profile pic' className='profile-pic' />
        </div>
      </div>
      <form className='profile-form'>
        <p>Which subjects do you use flashcards for most often?</p>
        <input
          className='subject-input'
          type='text'
          name='favSubjects'
          value={preferences.subjects}
          onChange={nonCheckChange}
        />

        <p>Do you prefer studying on a mobile or desktop device?</p>
        <div className='radio-container'>
          <div>
            <input
              className='radio-button'
              type='radio'
              name='MobileOrDesktop'
              value='Mobile'
              onChange={radioChange}
            />
            <span>Mobile</span>
          </div>
          <div>
            <input
              className='radio-button'
              type='radio'
              name='MobileOrDesktop'
              value='Desktop'
              onChange={radioChange}
            />
            <span>Desktop</span>
          </div>
        </div>

        <p>Do you prefer to study by</p>
        <select name='technique' onChange={nonCheckChange} className='subject-input'>
          <option hidden=''>Please select one</option>
          <option value='Listening'>Listening</option>
          <option value='Doing'>Doing</option>
          <option value='Reading'>Reading</option>
          <option value='Writing'>Writing</option>
          <option value='Other'>Other</option>
        </select>

        <p>How frequently do you want to study?</p>
        <select name='study-frequency' onChange={nonCheckChange} className='subject-input'>
          <option hidden=''>Please select one</option>
          <option value='Once a day'>Once a day</option>
          <option value='Twice a Day'>Twice a day</option>
          <option value='Once a week'>Once a week</option>
          <option value='Twice a week'>Twice a week</option>
          <option value='Three times a week'>Three times a week</option>
          <option value='Everyday'>Everyday</option>
          <option value='Other'>Other</option>
        </select>

        <p>How often would you like to recieve notifications?</p>
        <select name='notification-frequency' onChange={nonCheckChange} className='subject-input'>
          <option hidden=''>Please select one</option>
          <option value="When I haven't met my goal in a day">
            When I haven't met my goal in a day
          </option>
          <option value="When I haven't met my goal in a week">
            When I haven't met my goal in a week
          </option>
          <option value='Everyday'>Everyday</option>
          <option value="Don't send me notifications">
            Don't send me notifications
          </option>
        </select>

        <p>Do you prefer to study from decks that are</p>
        <div className='radio-container'>
          <div>
            <input
            type='radio'
            name='customOrPremade'
            value='pre-made'
            onChange={radioChange}
            />
            <span>Pre-made</span>
          </div>
        
          <div>
            <input
              type='radio'
              name='customOrPremade'
              value='custom'
              onChange={radioChange}
            />
            <span>Custom</span>
          </div>
        
        </div>
        <div className='button-container'>
          <button onClick={submitForm} className='bottom-button'>Save</button>
        </div>
      </form>
    </>
  );
};

export default Settings;
