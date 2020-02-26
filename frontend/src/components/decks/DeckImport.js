import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postDecks} from '../../actions';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Tags from './Tags';
import Footer from '../footer/Footer';
import './DeckImport.scss'

import Instructions from './ImportInstructions'
const ImportInput = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgba(106, 92, 85, 0.5)',
  
      },
      '@media (min-width: 1000px)' : {
        width: '30%',
        fontSize:'12rem'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(106, 92, 85, 0.5)',
  
      },
      '@media (max-width: 600px)' : {
        fontSize:'12rem',
        margin: '2% auto',
        width: '95%',
    

      }
    }
  })(TextField);


const DeckImport = props => {
  const [newDeck, setNewDeck] = useState({
    name: '',
    icon: '',
    tags: [],
    deck: []
  })
  const [exported, setExported] = useState('')

  const [showInstructions, setShowInstructions] = useState(false)

  const showInstruct = e => {
    e.preventDefault();
    setShowInstructions(!showInstructions)
  }

    const handleChanges = e => {
      setNewDeck({...newDeck, [e.target.name]: e.target.value})
    }
    const handleExportText = e => {
      setExported(e.target.value)
    }

    const importedDeck = [];
    // class Card {
    //   constructor(front, back) {
    //     this.front = front;
    //     this.back = back;
    //   }
    // }
    const createDeck = (deck) => {
      const splitString = deck.split(';')
      // console.log(splitString)
      for (let i = 0; i < splitString.length; i++) {
        let term = splitString[i].split(':')
        // console.log(term)
        importedDeck.push({front: term[0], back: term[1]})
    }
    console.log(importedDeck)
    setNewDeck({...newDeck, deck: importedDeck})
    console.log('newDeck inside createDeck', newDeck)
  }

    const addTags = (e) => {
      e.preventDefault()
      if (e.target.value !== '') {
        setNewDeck([...newDeck, e.target.value]);
        // selectedTags([...tags, event.target.value]);
        e.target.value = '';
      }
    }
    const removeTags= () => {}

    const handleSubmit = (e)=>{
      e.preventDefault();
      createDeck(exported);
      console.log('importedDeck in handleSubmit',importedDeck[1])
      //setNewDeck({...newDeck, deck: importedDeck})
      //console.log('newDeck inside handleSubmit', newDeck.deck)
      // props.postDecks(newDeck.deck, newDeck.name, newDeck.tags, newDeck.icon)
      // setTimeout(()=>{
      //   props.history.push('/dashboard')
      // }, 400)
    }
    return (
        <>
        {showInstructions ? <Instructions/> : null}
        <h1 className='deck-import-header'>Import a Deck: <i className="fas fa-question fa-lg q-icon" onClick={showInstruct}></i></h1>
        <form onSubmit={handleSubmit} className='deck-import-container'>
          <p className='deckInfo'>Deck Info</p>

          <div className='main-deck-wrapper'>
            <div className='deck-import-wrapper'>
            <ImportInput
              type='text'
              onChange={handleChanges}
              name='name'
              value={newDeck.name}
              variant="outlined"
              label='Deck Name'
            />
            </div>

            <div className='deck-import-wrapper icon-wrapper'>
              <ImportInput
                type='text'
                onChange={handleChanges}
                name='icon'
                value={newDeck.icon}
                className='icon-input'
                variant="outlined"
                label='Icon'
              />
              
              <button className='edit-icon'>Edit Icon</button>
            </div>
          </div>
          <div className='radio-wrapper'>
            <label><input type='radio' id='private' name='public-toggle' value='private'/> Private</label>
            <label><input type='radio' id='public' name='public-toggle' value='public'/> Public</label>
          </div>
{/* make sure to add tag state functions */}
          <div className='tagHolder'>
            <Tags tags={newDeck.tags} addTags={addTags} removeTags={removeTags} />
          </div>

          <h3>Quizlet Import</h3>
          <div className='import-container'>
          <textarea
            type='text'
            onChange={handleExportText}
            name='import'
            value={exported}
            multiline={true}
            placeholder='Paste deck import here'
            className='textbox-import'
            rows='10'
          />
          <button type="submit" >Create Deck</button>
          </div>
        </form>
    { importedDeck[1] === undefined ? <p>loading..</p> : <p>{importedDeck[1]}</p>}
        </>
    )
    }

export default connect(null, {postDecks})(DeckImport)