import React, { useEffect, useState } from "react";
import axios from "axios";
import EditTemplate from "./EditTemplate";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "semantic-ui-css/semantic.min.css";
import firebase from "firebase";
import { getCards, editCard } from "../../actions";
import poly from "../../assets/poly.png";
import { useHistory } from "react-router-dom";
import "./Cards.scss";
import { createGlobalStyle } from "styled-components";
import uuidv4 from "uuid/v4";
import {
	Divider,
	Segment,
	Header,
	Checkbox,
	Input,
	Form,
	Icon,
  TextArea
} from "semantic-ui-react";
import audio from "../../assets/audio.png";
import graduate from "../../assets/graduate.png";
import notebook from "../../assets/notebook.png";
import polygon from "../../assets/polygon.png";


const Cards = props => {
	const [currentDeck, setCurrentDeck] = useState([]);
	const [newName, setNewName] = useState({ deckName: "" });
	const [editedCard, setEditedCard] = useState([]);
	const [editing, setEditing] = useState(false);
	const [editedDeck, setEditedDeck] = useState([]);
	const [deletedDeck, setDeletedDeck] = useState([]);
	const [newCard, setNewCard] = useState(null);
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

	function deleteDeck(deck, cd) {
		setDeletedDeck(deck);
		setCurrentDeck(cd);
	}

	function runDelete(e) {
		e.preventDefault();
		let cards = {
			cards: deletedDeck
		};
		console.log(cards);
		let currentUser = firebase.auth().currentUser.uid;
		axios
			.delete(
				`https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${props.match.params.deckName}/delete-cards`,
				{ data: cards }
			)
			.then(res => {
				setCurrentDeck(res.data.data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	// useEffect(() => {
	//     let user = firebase.auth().currentUser.uid;
	//     console.log(props.match.params.deckName )
	// }, []);

	let history = useHistory();
	const handleChange = e => {
		let card = {
			id: newCard.id,
			data: {
				...newCard.data,
				[e.target.name]: e.target.value
			}
		};
		setNewCard(card);
	};
	const handleName = e => {
		console.log(editedCard, newName);
		setNewName({
			...newName,
			[e.target.name]: e.target.value
		});
	};

	const handleNewCard = () => {
		let newerCard = {
			id: uuidv4(),
			data: {
				front: "",
				back: "",
				archived: false
			}
		};
		setNewCard(newerCard);
	};

	const addNewCard = e => {
		let currentUser = firebase.auth().currentUser.uid;
		e.preventDefault();
		let card = { front: newCard.data.front, back: newCard.data.back };
		console.log(card);
		axios
			.post(
				`https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${props.match.params.deckName}/add`,
				{ cards: [card] }
			)
			.then(res => {
				setCurrentDeck(res.data.data);
			});
		let newDeck = currentDeck;
		setNewCard(null);
	};

	const handleSubmit = (e, user, deckName) => {
		// console.log(editCard, newName)
		let currentUser = firebase.auth().currentUser.uid;
		e.preventDefault();
		// props.editCard(e)
		props.editCard(editedCard, currentUser, props.match.params.deckName);
		props.history.push("/dashboard");
	};

	if (currentDeck.length === 0) {
		return (
			<div className="loading-background">
				<h1 className="deckName">{props.match.params.deckName}</h1>
				<div className="loader">
					<Loader
						type="ThreeDots"
						color="#F66E00"
						height={80}
						width={80}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<div className="pages">
				<div className="loading-background">
					<div className="back-button-and-header">
						{/* <div className='time'>
              <h2>Today</h2>
              <h2>This Week</h2>
              <h2>Lifetime</h2>
            </div> */}
						<img className="back" src={poly} onClick={() => history.goBack()}	/>
						<h1 className="deckNames" onClick={() => history.goBack()}>
							Edit Deck
						</h1>
					</div>
					<div className="cardnum">
						<div className="mobilenum">
							<h4 className="card-length">{currentDeck.length}</h4>
							<h4 className="Total-Cards">Total Cards</h4>
						</div>

						<div className="mobilemaster">
							<h4 className="card-length">67</h4>
							<h4 className="Total-Cards">Mastered</h4>
						</div>
					</div>
				</div>

				<div>
					<div className="topSection">
          <div className="desktitle-back2">
          <img className="back2" src={polygon} onClick={() => history.goBack()}	/>
						<h1 className="deckNames2" onClick={() => history.goBack()}>
							Edit Deck
						</h1>
          </div>
						<div className="subtitle">
							<h2>Deck Info</h2>
						</div>

						<Form className="formTitle" size={"large"}>
							<Form.Field>
								<label>Deck Name</label>
								<Input
                  type="text"
                  style={{ width: "30%" }}
                  className="titleInput"
									onChange={handleName}
									 placeholder={props.match.params.deckName}
								/>
							</Form.Field>
              {/* <button
								className="iconbtn"
							>
							Add Icon 
							</button> */}
              
						</Form>
						{/* <div className="btnn">
							<button
								className="goBack"
								onClick={() => props.history.goBack()}
								onSubmit={handleSubmit}
							>
								<Icon name=" long arrow alternate left" /> Go Back
							</button>
							<button
								className="save"
								// onClick = {() => props.history.push(`/decklist`)}
								onSubmit={handleSubmit}
							>
								Save
							</button>
						</div> */}
					</div>
				</div>

				<div className="middleSection">
					<h2>Flashcards</h2>
					<p>
						Select a card below to edit card content or archive the card.
					</p>
					<button
						className="Add New Card"
						// onClick = {() => props.history.push(`/decklist`)}
						onClick={handleNewCard}
					>
						Add New Card
					</button>
				</div>
				{newCard ? (
					<div className="new-card">
						<div className="container"> 
							<div className="cardList">
								<div className="cardData ">
									<Segment className="segment">
										<div className="cardTop">
											<Header as="h5" className="headers">
												Front
											</Header>
											{/* <Checkbox
                    // style={{border: "none"}}
                    className='check'
                    checked={this.state.singleCard.checked}
                    onChange={this.archiveCard}
                  />*/}
										</div>

										{/* <form onSubmit={this.handleSubmit}> */}
										<TextArea
											rows={2}
											style={{ resize: "none" }}
											transparent
											size="massive"
											className="defination"
											type="text"
											name="front"
											onChange={handleChange}
											value={newCard.data.front}
										/>

										<Divider clearing />
										<Header
											as="h5"
											style={{ marginTop: -2 }}
											className="headers"
										>
											Back
										</Header>

										<TextArea
											rows={2}
											style={{ resize: "none" }}
											// transparent size="massive"
											className="defination"
											type="text"
											name="back"
											onChange={handleChange}
											value={newCard.data.back}
										/>

										{/* </form> */}
									</Segment>
								</div>
							</div>
							{/* <div className = "button">
	//                <button className = "submit" onClick = {this.handlesubmit}>submit</button>
	//              </div> */}
						</div>
						<div className="button-div">
							<button
								className="archive add-button"
								// onClick = {() => props.history.push(`/decklist`)}
								onClick={e => addNewCard(e)}
							>
								{" "}
								Add{" "}
							</button>
						</div>
					</div>
				) : null}
				<div className="bottomSection">
					{/* <Input
						size="large"
						className="search"
						icon="search"
						iconPosition="left"
						center
						transparent
						placeholder="Search for a Card..."
					/> */}

					<div>
						<form onSubmit={handleSubmit} className="div-form">
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
									deleteDeck={deleteDeck}
									deletedDeck={deletedDeck}
									deleted={card.data.deleted}
								/>
							))}
							{/* <button onSubmit={handleSubmit}>Update</button> */}
						</form>
					</div>
				</div>

				<div className="btn2">
					{/* <button
                            className= "delete"
                        //     onClick ={() => props.history.goBack()}
                        //     onSubmit = {handleSubmit}
                        >
                         Delete
                        </button> */}
					{deletedDeck.length > 0 ? (
						<button
							className="delete"
							// onClick = {() => props.history.push(`/decklist`)}
							onClick={e => runDelete(e)}
						>
							Delete
						</button>
					) : (
						<button
							className="delete"
							// onClick = {() => props.history.push(`/decklist`)}
							onClick={e => runDelete(e)}
							style={{ opacity: 0.5 }}
						>
							Delete
						</button>
					)}
					{editedCard.length > 0 ? (
						<button
							className="archive"
							// onClick = {() => props.history.push(`/decklist`)}
							onClick={e => handleSubmit(e)}
						>
							{" "}
							Submit{" "}
						</button>
					) : (
						<button
							className="archive"
							// onClick = {() => props.history.push(`/decklist`)}
							onClick={e => handleSubmit(e)}
							style={{ opacity: 0.5 }}
						>
							{" "}
							Submit
						</button>
					)}
				</div>

				<div className="DesktopStudy">
					{/* <div className = "TitleSection"> */}

					<h2 className="DeskTitle">Study Tips</h2>
					<p className="DeskSub">and other bits</p>
					{/* </div> */}
					<div className="DeskCase">
						<div className="pic1 pix">
							<img
								className="notebook"
								src={notebook}
								alt={"an opened notebook with a pencil"}
							/>
							<p className="DeskPara">
								What exactly is spaced-repition and how it can help you
							</p>
						</div>
						<div className="pic2 pix">
							<img
								className="graduate"
								src={graduate}
								alt={" a graduate cap untop of a globe"}
							/>
							<p className="DeskPara">
								Harvard University is taking a new approach to learning
								using mNeme
							</p>
						</div>
						<div className="pic3 pix">
							<img
								className="audio"
								src={audio}
								alt={"a person wearing headphones "}
							/>
							<p className="DeskPara">
								Discover what mNeme has in store for the future
							</p>
						</div>
						{/* </div> */}
					</div>
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
