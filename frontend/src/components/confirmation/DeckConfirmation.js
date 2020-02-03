import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getDecks } from '../../actions';
import './deckConfirmation.scss';

function DeckConfirmation(props) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let currentUserId = firebase.auth().currentUser.uid;
        setCurrentUser(currentUserId);
      } else {
        return null;
      }
    });
  }, []);
  const dispatch = useDispatch();
  let history = useHistory();

  const { action, colId } = props.match.params;

  const archiveDeck = async () => {
    axios
      .post(
        `https://flashcards-be.herokuapp.com/api/deck/archive/${currentUser}/${colId}/`
      )
      .then(res => {
        setTimeout(function() {
          dispatch({ type: 'ARCHIVE_SUCCESSFUL' });
          props.history.push('/dashboard');
        }, 1000);
      })
      .catch(err => {
        console.log('archive deck err', err);
      });
  };

  const unArchiveDeck = async () => {
    axios
      .post(
        `https://flashcards-be.herokuapp.com/api/deck/remove-archive/${currentUser}/${colId}/`
      )
      .then(res => {
        setTimeout(function() {
          dispatch({ type: 'ARCHIVE_SUCCESSFUL' });
          props.history.push('/archived-decks');
        }, 1000);
      })
      .catch(err => {
        console.log('archive deck err', err);
      });
  };

  const deleteDeck = () => {
    axios
      .delete(
        `https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${colId}/delete-deck`
      )
      .then(res => {
        setTimeout(function() {
          dispatch({ type: 'ARCHIVE_SUCCESSFUL' });
          props.history.push('/dashboard');
        }, 1000);
      })
      .catch(err => {
        console.log('archive deck err', err);
      });
  };

  const deleteArchivedDeck = () => {
    axios
      .delete(
        `https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${colId}/delete-archived-deck`
      )
      .then(res => {
        setTimeout(function() {
          dispatch({ type: 'ARCHIVE_SUCCESSFUL' });
          props.history.push('/archived-decks');
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <p className='sure'>
        Sure you want to {action === 'deleteArchived' ? 'delete' : action} this
        deck?
      </p>
      <div className='buttons-div'>
        <p onClick={() => history.goBack()} className='go-back'>
          ← No, go back
        </p>
        {action === 'delete' ? (
          <div className='confirm-button' onClick={deleteDeck}>
            Delete
          </div>
        ) : action === 'unarchive' ? (
          <div className='confirm-button' onClick={unArchiveDeck}>
            Un-Archive
          </div>
        ) : action === 'deleteArchived' ? (
          <div className='confirm-button' onClick={deleteArchivedDeck}>
            Delete
          </div>
        ) : (
          <div className='confirm-button' onClick={archiveDeck}>
            Archive
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.deckcards,
    decks: state.decks,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDecks })(DeckConfirmation);
