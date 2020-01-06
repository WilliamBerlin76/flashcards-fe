import React, { useState, useEffect } from 'react';
import DashNav from './dashNav';

const Settings = props => {
    const [preferences, setPreferences] = useState({});
    return(
        <>
        <div className="settings-header-container">
            <DashNav />
            <h2>name here</h2>
            <img url="picture" />
        </div>
        <form className='profile-form'>
            <p>Which subjects do you use flashcards for most often?</p>
                <input 
                    type='text'    
                />

            <p>Do you prefer studying on a mobile or desktop device?</p>    
                <input
                    type='radio'
                />
                    <span>Mobile</span>
                <input
                    type='radio'
                />
                    <span>Desktop</span>

            <p>Do you prefer to study by</p>
                <select name='technique' placeholder='Please select one'>
                    <option>hi</option>
                    <option>hi</option>
                    <option>hi</option>
                    <option>hi</option>
                </select>

            <p>How frequently do you want to study?</p>    
                <select name='frequency' placeholder='Please select one'>
                    <option>hi</option>
                    <option>hi</option>
                    <option>hi</option>
                    <option>hi</option>
                </select>

            <p>How often would you like to recieve notifications?</p>
                <select name='notification-frequency' placeholder='Please select one'>
                    <option>hi</option>
                    <option>hi</option>
                    <option>hi</option>
                    <option>hi</option>
                </select>
            
            <p>Do you prefer to study from decks that are</p>
                <input 
                    type='radio'    
                />
                    <span>Pre-made</span>
                <input
                    type='radio'
                />
                    <span>Custom</span>
        </form>

        <button>Save</button>
        </>
    )
}

export default Settings;