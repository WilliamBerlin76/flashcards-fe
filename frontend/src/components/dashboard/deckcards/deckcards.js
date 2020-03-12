import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "rc-progress";
import firebase from "firebase";

import DeckMenu from "./deckMenu/deckMenu";

import "./deckcards.scss";

const DeckCards = props => {
  const [exampleCard, setExampleCard] = useState(null);
  const [deckLength, setDeckLength] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    let currentUser = firebase.auth().currentUser.uid;
    if (props.demo) {
      axios
        .get(
          `https://flashcards-be.herokuapp.com/api/demo/I2r2gejFYwCQfqafWlVy/${props.deckName}`
        )
        .then(res => {
          let card = res.data.data[0];
          setExampleCard(card.data.front);
          setDeckLength(res.data.data.length);
          setUser("demo");
        });
    } else {
      axios
        .get(
          `https://flashcards-be.herokuapp.com/api/deck/${currentUser}/${props.deckName}`
        )
        .then(res => {
          setExampleCard(res.data.deckInformation.exampleCard);
          setDeckLength(res.data.deckInformation.deckLength);
          setUser(currentUser);
          if (res.data.deckInformation.icon) {
            setIcon(res.data.deckInformation.icon);
          } else {
            return null;
          }
        });
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!exampleCard) {
    return <div></div>;
  } else {
    return (
      <div className="deckcard-div">
        <div className="menu-button">
          {!props.demo ? (
            <i className="fas fa-ellipsis-h" onClick={toggleMenu}></i>
          ) : (
            <i className="fas fa-ellipsis-h"></i>
          )}
          {showMenu ? <DeckMenu colId={props.deckName} /> : null}
        </div>

        <div
          className="deck"
          onClick={() => props.openDeck(props.deckName, user)}
        >
          <div className="deck-card">
            <div className="deck-info">
              {props.demo ? (
                <h3 className="deck-name">{`${props.deckName} - Demo`}</h3>
              ) : icon ? (
                <h3 className="deck-name">
                  {icon} {props.deckName}
                </h3>
              ) : (
                <h3 className="deck-name">{props.deckName}</h3>
              )}
              <p className="deck-length">{deckLength} cards</p>
            </div>
            <div className="example-card">{exampleCard}</div>
          </div>
          <div className="mastery">
            <h3>Mastery</h3>
            <Line
              percent="15"
              strokeWidth="1"
              strokeColor="#F66E00"
              className="mastery-line"
            />
            <p>3 Cards</p>
          </div>
        </div>
      </div>
    );
  }
};

export default DeckCards;
