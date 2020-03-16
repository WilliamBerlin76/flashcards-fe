import React from 'react'
import step1 from '../../assets/step-1.png'
import step2 from '../../assets/step-2.png'
import step3 from '../../assets/step3.png'
import './ImportInstructions.scss'

const Instructions = () => {
    return (
        <div className='instructionsWrapper'>
            <ol>
                <li>Go to quizlet and log in</li>
                <li>Select sets in the navigation bar</li>
                <img src={step1} alt = {'select sets'}/>
                <li>Choose the set that you want to export</li>
                <li>Click on the elipses (...) and select export</li>
                <img src={step2} alt={'select elipses'}/>
                <li>On the pop-up, for between terms and definitions select custom, and set it to colon(:)</li>
                <img src={step3} alt={'select custom and set it to colon'}/> 
                <li>For between rows select semicolon</li>
                <li>Click on the copy text button</li>
                <li>Return back to the mNeme import page and paste the copied text into the import text field</li>
                <li>Fill out the rest of the deck information, and create your new deck</li>
            </ol>
            
        </div>
    )
}

export default Instructions