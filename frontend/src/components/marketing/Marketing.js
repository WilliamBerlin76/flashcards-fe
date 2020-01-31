import React from 'react';
import './Marketing.scss'
import { Link } from 'react-router-dom';
import landingone from '../../assets/landingone.png';
import landingtwo from '../../assets/landingtwo.png';
import landingthree from '../../assets/landingthree.png';

const Marketing = () => {



    return(
        <div className = "page">

        <div className = "top-holder">
            
        <h3 className = "welcome">Welcome to</h3>
        <h1 className = "title">mNeme</h1>
        <p className = "pro">[Nee-Mee]</p>

        </div>

        <div className = "topwordsholder">
            <h4 className = "topwords">mNeme uses space-repition theory to help students retain material for longer than traditional cramming</h4>
        </div>

        <div className = "buttons">

            <div className = "flexup">
            <Link to = '/login'>
                <button className = "signup">Sign Up</button>
            </Link>
            </div>

            <div className = "flexsign">
            <Link to = '/login' >
                <button className = "signin">Sign In</button>
            </Link>
            </div>

        </div>

        <div className = "piconeholder">
            <img className = "picone" src = {landingone} alt = {'tablet phone computer woman'} />
        </div>

        <div className = "orange">
            <h4 className = "orangewords">Study your flashcards anywhere, anytime</h4>
        </div>

        <div className = "pictwoholder">
            <img className = "pictwo" src = {landingtwo} alt = {'two people holding a smiley face'} />
        </div>

        <div className = "study">
            <h3 className = 'studywords'>Students have seen a <h3 className = "percent">87%</h3> improvement in their grades and continue to use mNeme through out all stages of their education</h3>
        </div>

        <div className = "picthreeholder">
            <img className = "picthree" src = {landingthree} alt = {'man holding a smiley face'} />
        </div>

        <h3 className = "join">Join mNeme today</h3>

        <div className = "bottomb">
        <Link to = '/login'>

            <button className = "signuptwo">Sign Up</button>
  
        </Link>
        </div>

        </div>
    )


};

export default Marketing;
