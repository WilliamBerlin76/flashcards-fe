import React, { useState, useEffect } from 'react';
import DashNav from '../dashNav/dashNav';

const Settings = props => {
    const [preferences, setPreferences] = useState({});

    const nonCheckChange = e => {
        setPreferences({
            ...preferences,
            [e.target.name]: e.target.value
        });
        console.log(preferences)
    };

    const radioChange = e => {
        setPreferences({
            ...preferences,
            [e.target.name]: e.target.value
        })
        console.log(preferences)
    };

    const submitForm = e => {
        e.preventDefault();
        console.log(preferences)
    }

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
                    name='favSubjects'
                    value={preferences.subjects}
                    onChange={nonCheckChange}    
                />

            <p>Do you prefer studying on a mobile or desktop device?</p>    
                <input
                    type='radio'
                    name='MobileOrDesktop'
                    value='Mobile'
                    onChange={radioChange}
                />
                    <span>Mobile</span>
                <input
                    type='radio'
                    name='MobileOrDesktop'
                    value='Desktop'
                    onChange={radioChange}
                />
                    <span>Desktop</span>

            <p>Do you prefer to study by</p>
                <select name='technique'
                        onChange={nonCheckChange}
                >
                <option hidden="">Please select one</option>
                    <option
                        value='hi'
                    >hi</option>
                    <option
                        value='hello'
                    >hello</option>
                    <option
                        value='hey' 
                    >hey</option>
                </select>

            <p>How frequently do you want to study?</p>    
                <select name='study-frequency'
                        onChange={nonCheckChange}
                >
                    <option hidden="">Please select one</option>
                    <option
                        value='hi'
                    >hi</option>
                    <option
                        value='hello'
                    >hello</option>
                    <option
                        value='hey' 
                    >hey</option>
                </select>

            <p>How often would you like to recieve notifications?</p>
                <select name='notification-frequency'
                        onChange={nonCheckChange}
                >
                    <option hidden="">Please select one</option>
                    <option
                        value='hi'
                    >hi</option>
                    <option
                        value='hello'
                    >hello</option>
                    <option
                        value='hey' 
                    >hey</option>
                </select>
            
            <p>Do you prefer to study from decks that are</p>
                <input 
                    type='radio'
                    name='customOrPremade'
                    value='pre-made'
                    onChange={radioChange}    
                />
                    <span>Pre-made</span>
                <input
                    type='radio'
                    name='customOrPremade'
                    value='custom'  
                    onChange={radioChange}
                />
                    <span>Custom</span>
        </form>

        <button onClick={submitForm}>Save</button>
        </>
    )
}

export default Settings;