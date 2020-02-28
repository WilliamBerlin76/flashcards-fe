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
  const [tags, setTags] = useState([])
  const [title, setTitle] = useState('')
  const [exported, setExported] = useState('')

  const [showInstructions, setShowInstructions] = useState(false)

  const showInstruct = e => {
    e.preventDefault();
    setShowInstructions(!showInstructions)
  }



  const handleName = e => {
    let name = e.target.name;

    setTitle({
      ...title,
      [name]: e.target.value
    });
    
  }

    const handleChanges = e => {
      setNewDeck({...newDeck, [e.target.name]: e.target.value})
    }
    const handleExportText = e => {
      setExported(e.target.value)
    }

    let importedDeck = [];
    const createDeck = (deck) => {
      let array=[];
      const splitString = deck.split(';')
      for (let i = 0; i < splitString.length; i++) {
        let term = splitString[i].split(':')
        array.push({front: term[0], back: term[1]})
      }
      return importedDeck = array
    }

    const addTags = event => {
      event.preventDefault();
      if (event.target.value !== '') {
        setTags([...tags, event.target.value]);
        // selectedTags([...tags, event.target.value]);
        event.target.value = '';
      }
    };
    const removeTags = index => {
      setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const test = e => {
      e.preventDefault();
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      createDeck(exported)
      const subDeck = importedDeck.filter(card => {
        return card.front && card.back;
      });
      props.postDecks(subDeck, title, newDeck.tags, newDeck.icon)
      setTimeout(()=>{
        props.history.push('/dashboard')
      }, 400)
    }
    return (
        <>
        {showInstructions ? <Instructions/> : null}
        <form className='deck-import-container'>
          <div className='header-container'>
          <h1 className='deck-import-header'>Import a Deck: <i className="fas fa-question fa-lg q-icon" onClick={showInstruct}></i></h1>
          <p className='deckInfo'>Deck Info</p>

          <div className='main-deck-wrapper'>
            <div className='deck-import-wrapper'>
            <ImportInput
              type='text'
              onChange={handleName}
              name='deckName'
              variant="outlined"
              label='Deck Name'
              className='deckName-input'
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
              
              <button className='edit-icon' type='button'>Edit Icon</button>
            </div>
          </div>
          <div className='radio-wrapper'>
            <label><input type='radio' id='private' name='public-toggle' value='private'/> Private</label>
            <label><input type='radio' id='public' name='public-toggle' value='public'/> Public</label>
          </div>
{/* make sure to add tag state functions */}
          <div className='tagHolder'>
            <Tags tags={tags} addTags={addTags} removeTags={removeTags} />
          </div>
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
          <button type='button' onClick={handleSubmit}>Create Deck</button>
          </div>
        </form>

    {/* { newDeck.deck.length === 0 ? <p>loading...</p> : null} */}
        </>
    )
    }

export default connect(null, {postDecks})(DeckImport)