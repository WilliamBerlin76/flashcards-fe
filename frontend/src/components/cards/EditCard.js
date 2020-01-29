import React, { useEffect, useState } from 'react';
import EditTemplate from './EditTemplate';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Form, Input, Divider, Icon, Grid, Search } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import { getCards, editCard } from '../../actions';
import poly from '../../assets/poly.png';
import { useHistory } from 'react-router-dom';
import './Cards.scss';

const Cards = props => {
  const [currentDeck, setCurrentDeck] = useState([]);
  const [newName, setNewName] = useState({ deckName: '' });
  const [editedCard, setEditedCard] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedDeck, setEditedDeck] = useState([]);
  // const [currentUser, setcurrentUser] = useState(null)
  // const [currentUser, setcurrentUser] = useState(null);

  // console.log(props);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let currentUser = firebase.auth().currentUser.uid;
        // setcurrentUser(firebase.auth().currentUser.uid);
        props.getCards(props.match.params.deckName, currentUser);
      } else {
        return null;
      }
    });
  }, []);

  useEffect(() => {
    setCurrentDeck(props.deckcards);
    setEditedDeck(props.deckcards);
  }, [props.deckcards]);

  if (editing) {
    setEditedCard(editedDeck);
    console.log(currentDeck);
    setEditing(false);
  }

  function addCard(deck) {
    setCurrentDeck(deck);
    setEditing(true);
    let newDeck = [];
    deck.map(card => {
      let newCard = {
        id: card.id,
        front: card.data.front,
        back: card.data.back,
        archived: card.data.archived
      };
      newDeck.push(newCard);
    });
    setEditedDeck(newDeck);
  }

  // useEffect(() => {
  //     let user = firebase.auth().currentUser.uid;
  //     console.log(props.match.params.deckName )
  // }, []);

  let history = useHistory();
  const handleChange = (index, e) => {
    setEditedCard({
      ...editedCard,
      [e.target.name]: e.target.value
    });
  };
  const handleName = e => {
    console.log(editedCard, newName);
    setNewName({
      ...newName,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, user, deckName) => {
    // console.log(editCard, newName)
    let currentUser = firebase.auth().currentUser.uid;
    e.preventDefault();
    // props.editCard(e)
    props.editCard(editedCard, currentUser, props.match.params.deckName);
  };

  if (currentDeck.length === 0) {
    return (
      <div className='loading-background'>
        <h1 className='deckName'>{props.match.params.deckName}</h1>
        <div className='loader'>
          <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='page'>
        <div className='loading-background'>
          <img className='back' src={poly} onClick={() => history.goBack()} />
          <h1 className='deckName'>Edit Deck</h1>
          <div className='cardnum'>
            <h4 className='card-length'>{props.deckcards.length}</h4>
            {/* <img className = "smile" src = {smiley} alt = {'a smiling emoji'}/> */}
            <h4 className='Total-Cards'>Total Cards</h4>
          </div>
        </div>

        {/* <div> */}
        {/* <div className='topSection'> */}
        {/* <div className='subtitle'>
              <h2>Deck Info</h2>
              
            </div> */}

        {/* <Form size={'large'}>
              <Form.Field>
                <label>Deck Name</label>
                <Input
                  type='text'
                  onChange={handleName}
                  placeholder={props.match.params.deckName}
                />
              </Form.Field>
              <Divider />
            </Form> */}
        {/* <div className='btn2'>
              <button
                className='goBack'
                onClick={() => props.history.goBack()}
                onSubmit={handleSubmit}
              >
                <Icon name=' long arrow alternate left' /> Go Back
              </button>
              <button
                className='save'
                // onClick = {() => props.history.push(`/decklist`)}
                onSubmit={handleSubmit}
              >
                Save
              </button>
            </div> */}
        {/* </div> */}
        {/* </div> */}

        <div className='middleSection'>
          <h2>Flashcards</h2>
          <p>Select a card below to edit card content or archive the card.</p>
          {/* <button
            className='Add New Card'
            // onClick = {() => props.history.push(`/decklist`)}
            onSubmit={handleSubmit}
          >
            Add New Card
          </button> */}
        </div>
        <div className='bottomSection'>
          {/* <Input
            size='large'
            className='search'
            icon='search'
            iconPosition='left'
            center
            transparent
            placeholder='Search for a Card...'
          /> */}

          <div>
            <form onSubmit={handleSubmit}>
              {props.error && <p>{props.error}</p>}
              {currentDeck.map(card => (
                <EditTemplate
                  key={Math.random()}
                  deckName={props.match.params.deckName}
                  user={firebase.auth().currentUser.uid}
                  setEditedCard={addCard}
                  editedCard={editedCard}
                  setCurrentDeck={setCurrentDeck}
                  currentDeck={currentDeck}
                  id={card.id}
                  card={card.data}
                  addCard={addCard}
                  editedDeck={editedDeck}
                />
              ))}
              {/* <button onSubmit={handleSubmit}>Update</button> */}
            </form>
          </div>
        </div>

        <div className='btn2'>
          {/* <button
                            className= "delete"
                        //     onClick ={() => props.history.goBack()}
                        //     onSubmit = {handleSubmit}
                        >
                         Delete
                        </button> */}
          <button
            className='delete'
            // onClick = {() => props.history.push(`/decklist`)}
            onClick={e => handleSubmit(e)}
          >
            Archive
          </button>
          <button
            className='archive'
            // onClick = {() => props.history.push(`/decklist`)}
            onClick={e => handleSubmit(e)}
          >
            {' '}
            Submit{' '}
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    deckcards: state.deckcards,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCards, editCard })(Cards);
