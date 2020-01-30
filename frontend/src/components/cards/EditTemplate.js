import React from "react";
import Loader from "react-loader-spinner";
import "semantic-ui-css/semantic.min.css";
import { Divider, Segment, Header, Checkbox, Input,TextArea , Icon} from "semantic-ui-react";
import "./Cards.scss";
import { editCard } from '../../actions';
import firebase from "firebase";


class EditTemplate extends React.Component {
	constructor(props) {		
		super(props);
		this.state = {			
			singleCard: {				
				front: this.props.card.front,
				back: this.props.card.back,
				archived: this.props.card.archived,
				 edited: []
            }
           
		};		
		// console.log(this.state);

	}

	handleChange = e => {
		this.setState({
			singleCard: {
				...this.state.singleCard,
				[e.target.name]: e.target.value
			}
		});
    };
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.singleCard.edited !== this.state.singleCard.edited) {
            this.props.setEditedCard(this.state.singleCard.edited)
        }
      }

    addCardtoEdited = e => {
        e.preventDefault();
        console.log(this.props.card)
	    let card = {
	      id: this.props.id,
	      front: this.state.singleCard.front,
	      back: this.state.singleCard.back,
	      archived: this.state.singleCard.archived,
        };
        console.log(card);
	    this.setState({singleCard: {
            ...this.state.singleCard,
            edited: [...this.state.singleCard.edited, card]
            // console.log(this.state.singleCard);
        }        
        }); 
        setTimeout(function(){

        }, 1000)         
            console.log(this.state);

        this.props.setEditedCard(this.state.singleCard.edited);
	  };

	handleSubmit = (e, id, deckName) => {
		e.preventDefault();
        // this.props.editCard(this.state.singleCard);
        this.props.editCard(this.props.editedCard, this.props.user, this.props.deckName);

	};

	handleDelete = (e,  id, deckName) => {
		e.preventDefault();
		let card = {
			id: this.props.id,
			front: this.state.singleCard.front,
			back: this.state.singleCard.back,
			archived: this.state.singleCard.archived,
		  };
		const array = [...this.state.singleCard, card];
		const index = array.indexOf(e.target.value.front)
		// this.setState({
			// singleCard: {
			if (index !== -1) {
				array.splice(index, 1);
				this.setState({edited: array});
			}
		// }
		// });

		// this.setState({singleCard: this.state.singleCard.filter(function(singleCard) { 
		// 	return singleCard !== e.target.value 
		// })});
	};

	render() {
        if (!this.props.card) {

            return    (
             <div className = "loader">
        
          <Loader type="ThreeDots" color="#F66E00" height={80} width={80} />
        
           </div>
                        )
         }  else {
		return (
			<div className="container">
				<div className="cardList">
					<div className="cardData ">
					
						<Segment className="segments">
						<button type='button' className="deleteCard" onClick={(index) => this.handleDelete(index)}><Icon  name='trash' /></button>
							<div className="cardTop">
								<Header as="h4" style={{ backgroundColor: "white", color: "#F66E00"}} className="headers">
									Front
								</Header>
                                <Checkbox 
                                    // style={{border: "none"}}
                                    className="check" 
                                    
                                />
							</div>
							{/* <form onSubmit={this.handleSubmit}> */}
								<TextArea  rows={2}
                                    // style={{ minHeight: 100, textAlign: 'center', width: 100%; height: 70px;  }}
									className="defination"
									type="text"
									name="front"
									placeholder="Front"
									onChange={this.handleChange}
									value={this.state.singleCard.front}
								/>

								<Divider clearing />
								
								<Header as="h4" style={{ marginTop: -2, backgroundColor: "white", color: "#F66E00"}} className="headers">
									Back
								</Header>

								<TextArea rows={2}
                                    // style={{ minHeight: 100, textAlign: 'center'  }}
									// transparent size="massive"
									className="defination"
									type="text"
									name="back"
									placeholder="Back"
									onChange={this.handleChange}
									value={this.state.singleCard.back}
								/>
                                 <button className="quo-btn" onClick = {(e) => this.addCardtoEdited(e)}>
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







   