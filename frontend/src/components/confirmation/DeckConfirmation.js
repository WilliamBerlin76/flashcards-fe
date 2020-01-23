import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';

import { getDecks } from '../../actions';

function DeckConfirmation(props) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let currentUserId = firebase.auth().currentUser.uid;
        setCurrentUser(currentUserId);
      } else {
        return null
      }
    })
  }, []);
  const dispatch = useDispatch();

  const { action, colId } = props.match.params;

  const archiveDeck = async () => {
    axios
      .post(`https://flashcards-be.herokuapp.com/api/deck/archive/${currentUser}/${colId}/`)
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
    axios.delete(`https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${colId}/delete-archived-deck`).then(res => {
      setTimeout(function() {
        dispatch({ type: 'ARCHIVE_SUCCESSFUL' });
        props.history.push('/archived-decks');
      }, 1000);
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <p>Sure you want to {action === 'deleteArchived' ? 'delete' : action} this deck?</p>
      <div className="buttons">
        <p className="go-back">← No, go back</p>
        {action === 'delete' ? (
          <button onClick={deleteDeck}>Delete</button>
        ) : action === 'unarchive' ? (
          <button onClick={unArchiveDeck}>Un-Archive</button>
        ) : action === 'deleteArchived' ? (
          <button onClick={deleteArchivedDeck}>Delete</button>
        ) : (
          <button onClick={archiveDeck}>Archive</button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    decks: state.decks,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDecks })(DeckConfirmation);
