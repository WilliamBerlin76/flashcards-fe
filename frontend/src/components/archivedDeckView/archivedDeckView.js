import React, { useEffect, useState} from 'react';
import firebase from 'firebase';
import axios from 'axios';
import Cards from './cards/cards'
import { useHistory } from 'react-router-dom';

import './archivedDeckView.scss';
import poly from '../../assets/poly.png';

export default function ArchivedDeckView(props) {
  const [deckArr, setDeckArr] = useState([]);
  const [deckInfo, setDeckInfo] = useState({});
  let collection = props.match.params.colId
  let history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            let currentUser = firebase.auth().currentUser.uid;
            axios.get(`https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${collection}/archive`)
            .then(res => {
              setDeckArr(res.data.cards)
              setDeckInfo(res.data.deckInformation)
            })
            .catch(err => {
              console.log(err)
            })
        } else {
            return null
        }
    })
  }, [])

  return (
    <div>
        <div className="header">
            <h2>{deckInfo.deckName}</h2>
            <img
            className='back'
            src={poly}
            alt='back-arrow'
            onClick={() => history.goBack()}
          />
        </div>  
        {deckArr.map(item => {
          return(
              <Cards 
                key={item.id}
                front={item.front}
                back={item.back}
              />
          )
      })}
    </div>
  )
}
