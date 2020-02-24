import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postDecks} from '../../actions';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Tags from './Tags';
import Footer from '../footer/Footer';

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
    const [newName, setNewName] = useState('');
    const [newIcon, setNewIcon] = useState('');
    const [tags, setTags] = useState([]);
    const [newDecks, setNewDecks] = useState([{ front: '', back: '' }]);

    

    return (
        <>
        <h1>Import a Deck: Click on instrunctions</h1>
        <form>
          <p className='deckInfo'>Deck Info</p>

          <div className='inputHolders'>
            <OrangeInput
              label='Deck Name'
              type='text'
              onChange={handleName}
              name='deckName'
              // placeholder = "Deck Name"
            />

            <div className='iconHolder'>
              <OrangeInput
                label='Icon'
                className='iconField'
                type='text'
                onChange={handleIcon}
                name='icon'
              />
            </div>
          </div>
{/* make sure to add tag state functions */}
          <div className='tagHolder'>
            <Tags tags={tags} addTags={addTags} removeTags={removeTags} />
          </div>

          <h3>Quizlet Import</h3>
          <textarea
            
          />
        </form>
        </>
    )
}


