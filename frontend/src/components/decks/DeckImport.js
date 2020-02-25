import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postDecks} from '../../actions';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Tags from './Tags';
import Footer from '../footer/Footer';
import './DeckImport.scss'

import Instructions from './ImportInstructions'
const OrangeInput = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgba(106, 92, 85, 0.5)',
  
      },
      '@media (min-width: 1000px)' : {
        width: '100%',
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
    import: ''
  })
  const [imported, setImported] = useState([{
    front: '',
    back:''
  }])

  const [showInstructions, setShowInstructions] = useState(false)



  const showInstruct = e => {
    e.preventDefault();
    setShowInstructions(!showInstructions)
  }

    const handleChanges = e => {
      setNewDeck({...newDeck, [e.target.name]: e.target.value})
    }
    const addTags = () => {}
    const removeTags= () => {}
    const handleName = () => {}
    const handleIcon = () => {}
    const handleSubmit = ()=>{}

    return (
        <>
        {showInstructions ? <Instructions/> : null}
        <h1 className='deck-import-header'>Import a Deck: <i className="fas fa-question fa-lg" onClick={showInstruct}></i></h1>
        <form onSubmit={handleSubmit} className='deck-import-container'>
          <p className='deckInfo'>Deck Info</p>

          <div className='inputHolders'>
            <div className='deck-import-wrapper'>
            <OrangeInput
              type='text'
              onChange={handleChanges}
              name='name'
              value={newDeck.name}
              variant="outlined"
              label='Deck Name'
            />
            </div>

            <div className='deck-import-wrapper icon-wrapper'>
              <OrangeInput
                className='iconField'
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
            onChange={handleChanges}
            name='import'
            value={newDeck.import}
            multiline={true}
            placeholder='Paste deck import here'
            className='textbox-import'
            rows='10'
          />
          <button type="submit">Create Deck</button>
          </div>
        </form>
        </>
    )
}

export default DeckImport


