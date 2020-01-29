import React from 'react';
import Loader from 'react-loader-spinner';
import 'semantic-ui-css/semantic.min.css';
import {
  Divider,
  Segment,
  Header,
  Checkbox,
  Input,
  TextArea
} from 'semantic-ui-react';
import './Cards.scss';
import { editCard } from '../../actions';
import firebase from 'firebase';

// import './DeckList.scss';

class EditTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleCard: {
        front: this.props.card.front,
        back: this.props.card.back,
        archived: this.props.card.archived,
        completed: false
      }
    };
  }

  archiveCard = e => {
    e.preventDefault();
    this.setState({
      singleCard: {
        ...this.state.singleCard,
        archived: !this.state.singleCard.archived
      }
    });
  };

  handleChange = e => {
    this.setState({
      singleCard: {
        ...this.state.singleCard,
        [e.target.name]: e.target.value
      }
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.state.singleCard.edited);
  //   if (prevState.singleCard.edited !== this.state.singleCard.edited) {
  //     this.props.setEditedCard(this.state.singleCard.edited);
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('current completed', this.state.singleCard.completed);
  //   console.log('next completed', nextState.singleCard.completed);
  //   if (this.state.singleCard.completed !== nextState.singleCard.completed) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  addCardtoEdited = e => {
    e.preventDefault();
    let card = {
      id: this.props.id,
      data: {
        front: this.state.singleCard.front,
        back: this.state.singleCard.back,
        archived: this.state.singleCard.archived
      }
    };
    let newDeck = [];
    console.log(this.props.editedDeck);
    this.props.currentDeck.map(c => {
      if (this.props.id !== c.id) {
        newDeck.push(c);
      } else {
        newDeck.push(card);
      }
    });
    console.log(newDeck);
    this.props.addCard(newDeck);

    // setTimeout(function() {}, 1000);
    // console.log(this.state);

    // this.props.setEditedCard(this.state.singleCard.edited);
  };

  handleSubmit = (e, id, deckName) => {
    e.preventDefault();
    // this.props.editCard(this.state.singleCard);
    this.props.editCard(
      this.props.editedCard,
      this.props.user,
      this.props.deckName
    );
  };

  render() {
    if (!this.props.card) {
      return (
        <div className='loader'>
          <Loader type='ThreeDots' color='#F66E00' height={80} width={80} />
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='cardList'>
            <div className='cardData '>
              <Segment className='segments'>
                <div className='cardTop'>
                  {this.state.singleCard.archived ? (
                    <Header as='h5' className='header'>
                      Front - <span className='archived-span'>archived</span>
                    </Header>
                  ) : (
                    <Header as='h5' className='header'>
                      Front
                    </Header>
                  )}
                  <Checkbox
                    // style={{border: "none"}}
                    className='check'
                    checked={this.state.singleCard.archived}
                    onChange={this.archiveCard}
                  />
                </div>

                {/* <form onSubmit={this.handleSubmit}> */}
                <TextArea
                  rows={2}
                  // style={{ minHeight: 100, textAlign: 'center', width: 100%; height: 70px;  }}
                  // transparent size="massive"
                  className='defination'
                  type='text'
                  name='front'
                  placeholder='Front'
                  onChange={this.handleChange}
                  value={this.state.singleCard.front}
                />

                <Divider clearing />
                <Header as='h5' style={{ marginTop: -2 }} className='header'>
                  Back
                </Header>

                <TextArea
                  rows={2}
                  // style={{ minHeight: 100, textAlign: 'center'  }}
                  // transparent size="massive"
                  className='defination'
                  type='text'
                  name='back'
                  placeholder='Back'
                  onChange={this.handleChange}
                  value={this.state.singleCard.back}
                />
                <button
                  className='quo-btn'
                  onClick={e => this.addCardtoEdited(e)}
                >
                  Confirm change, then submit
                </button>
                {/* </form> */}
              </Segment>
            </div>
          </div>
          {/* <div className = "button">
	//                <button className = "submit" onClick = {this.handlesubmit}>submit</button>
	//              </div> */}
        </div>
      );
    }
  }
}
export default EditTemplate;
