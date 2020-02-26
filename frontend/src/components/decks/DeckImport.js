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
    deck: []
  })
  const [cards, setCards] = useState([])
  const [exported, setExported] = useState("What is ostinato?:left hand pattern usually consists of four pairs of eight notes;Artie Shaw:brought a West coast style to jazz, Born in the slums in New York to Jewish parents, fell in love with Jazz, sold millions of copies of 'Begin the Beguine';What is comping?:new piano accompaniment style to emerge from the swing era;What is a riff?:outlined a blues or rhythm change;What was Symphonic jazz?:symphony style jazz group; Paul Whiteman was the leader;Cotton club:famous speak easy in New York where only black performers played and only white patrons attended;Duke Ellington:Born in Chicago middle class. moved to Harlem in 1923 and began playing at the cotton club. Composer, pianist and band leader. Most influential figures in jazz.;Sugar Foot Stomp:Fletcher Henderson;Sugar Foot Stomp key and form:12 bar blues choruses in B major`;Coleman Hawkins:Known as the father of the Jazz Tenor Saxophone. Black Tenor Saxophone Player who played in Fletcher Henderson's group.;Articulation:the way in which notes are attacked by the tongue;Dissonance:class created by notes that do not fit a given harmony;chord tones:notes are part of a chord;What is the key and form for Mississippi Mud?:A theme: E flat major; B theme: C minor and E flat major;What was boogie woogie?:a solo piano style that initially surfaced during the 1920s; 8 to the bar;")

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
    const createDeck = (exportedString) => {
      const splitString = exported.split(';');
      for (let i = 0; i < splitString.length; i++) {
        let term = splitString[i].split(':');
         setCards([...cards, {front: term[0],  back: term[1]}])
      }
      
    }
    console.log(createDeck(exported))
    const addTags = (e) => {
      e.preventDefault()
      if (e.target.value !== '') {
        setNewDeck([...newDeck, e.target.value]);
        // selectedTags([...tags, event.target.value]);
        e.target.value = '';
      }
    }
    const removeTags= () => {}
    const handleName = () => {}
    const handleIcon = () => {}
    const handleSubmit = (e)=>{
      e.preventDefault();
    }

    return (
        <>
        {showInstructions ? <Instructions/> : null}
        <h1 className='deck-import-header'>Import a Deck: <i className="fas fa-question fa-lg q-icon" onClick={showInstruct}></i></h1>
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
        </>
    )
}

export default DeckImport


