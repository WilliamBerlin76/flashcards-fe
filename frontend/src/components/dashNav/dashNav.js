import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import './dashNav.scss'
const DashNav = props => {
    const [curUser, setCurUser] = useState(false)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            setCurUser(true)
          } else {
            return null
          }
        });  
      }, []);
      const userPic = () => {
        switch(props.location.pathname) {
          case "/Preferences":
            return null;
          default:
            if(curUser) {
              return (
                <img src={firebase.auth().currentUser.photoURL} alt='profile pic' className='desk-dash-pic' />
              )
            }
            else {
              return null;
            }
        }
      }
    return(
        <div className="dashNav">
            <div className='mNeme' >
                <span className='m'>m</span>
                <span className='neme'>Neme</span>
            </div>
            {(props.location.pathname !== '/search') ?<Link to={'/search'} className='publicSearch'>Find Public Decks</Link> : null}
            {userPic()}
            
            
        </div>
    )
}
export default DashNav;
