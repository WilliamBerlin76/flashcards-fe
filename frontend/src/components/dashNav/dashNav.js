import React, { useState, useEffect } from "react";
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

    return(
        <div className="dashNav" onClick={e=>{e.preventDefault(); props.history.push('/dashboard')}}>
            <div className='mNeme' >
                <span className='m'>m</span>
                <span className='neme'>Neme</span>
            </div>
            {curUser ? 
                <img src={firebase.auth().currentUser.photoURL} alt='profile pic' className='desk-dash-pic' /> 
                : null
            }
        </div>
    )
}
export default DashNav;
