import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postDecks} from '../../actions';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Tags from './Tags';
import Footer from '../footer/Footer';

import Instructions from './ImportInstructions'
const OrangeInput = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgba(106, 92, 85, 0.5)',
  
      },
      '@media (min-width: 1000px)' : {
        width: '50%',
        fontSize:'12rem'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(106, 92, 85, 0.5)',
  
      },
      
    }
  })(TextField);

  
const DeckImport = props => {
  const [newDeck, setNewDeck] = useState({
    name: '',
    icon: '',
    tags: [],
    import: ''
  })

  const [showInstructions, setShowInstructions] = useState(false)



  const showInstruct = e => {
    e.preventDefault();
    setShowInstructions(!showInstructions)
  }

    const handleChanges = e => {
      setNewDeck({...newDeck, [e.target.name]: e.target.value})
    }
    //make sure to create a handleSubmit
    //add and remove tag functions
    const addTags = () => {}
    const removeTags= () => {}
    const handleName = () => {}
    const handleIcon = () => {}
    const handleSubmit = ()=>{}

    return (
        <>
        {showInstructions ? <Instructions/> : null}
        <h1>Import a Deck: <i className="fas fa-question fa-lg" onClick={showInstruct}></i></h1>
        <form onSubmit={handleSubmit}>
          <p className='deckInfo'>Deck Info</p>

          <div className='inputHolders'>
            <OrangeInput
              label='Deck Name'
              type='text'
              onChange={handleChanges}
              name='name'
              value={newDeck.name}
            />

            <div className='iconHolder'>
              <OrangeInput
                label='Icon'
                className='iconField'
                type='text'
                onChange={handleChanges}
                name='icon'
                value={newDeck.icon}
              />
            </div>
          </div>
{/* make sure to add tag state functions */}
          <div className='tagHolder'>
            <Tags tags={newDeck.tags} addTags={addTags} removeTags={removeTags} />
          </div>

          <h3>Quizlet Import</h3>
          <textarea
            type='text'
            onChange={handleChanges}
            name='import'
            value={newDeck.import}
            multiline={true}
            placeholder='Paste deck import here'
          />
          <button type="submit">Create Deck</button>
        </form>
        </>
    )
}

export default DeckImport


