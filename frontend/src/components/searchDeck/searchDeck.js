import React, { useState, useEffect } from "react";
import "./navSearchBar.scss";
import "firebase/firestore";

import { firestore } from "../../App";
import "../dashboard/deckcards/deckcards.scss";

const SearchDeck = props => {
  const [publicDecks, setPublicDecks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState([]);
  const resultsArr = [];

  console.log("publicDecks", publicDecks);
  console.log("query", query);

  useEffect(() => {
    firestore.collection("PublicDecks").onSnapshot(snapshot => {
      const deckArr = [];
      snapshot.forEach(doc => {
        deckArr.push(doc.data());
      });
      setPublicDecks(deckArr);
    });
  }, []);

  const openDeck = (deck, user) => {
    props.history.push(`/${user}/${deck}/cards`);
    console.log(deck);
  };

  const handleChange = e => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    publicDecks.filter(deck => {
      if (
        (deck.deckName &&
          deck.deckName.toLowerCase() === searchField.toLowerCase()) ||
        (deck.createdBy &&
          deck.createdBy.toLowerCase() === searchField.toLowerCase()) ||
        (deck.tags && deck.tags.indexOf(searchField) >= 0)
      ) {
        resultsArr.push(deck);
        setSearchField("");
      } else {
        console.log("Not Found");
        setSearchField("");
      }
      setQuery(resultsArr);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="center">
          <input
            className="center"
            type="text"
            placeholder="Search Public Decks"
            onChange={handleChange}
            value={searchField}
          />
          <button type="submit">Find</button>
        </div>
      </form>

      <div className="decks-section">
        {query
          ? query.map(item => {
              return (
                <div className="deckcard-div" onClick={openDeck}>
                  <div className="deck">
                    <div className="deck-card">
                      <div className="deck-info">
                        <h3 className="deck-name">{item.deckName}</h3>
                      </div>
                      <div className="example-card">{item.exampleCard}</div>
                    </div>
                    <div className="mastery">
                      <h3>Created by: {item.createdBy}</h3>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default SearchDeck;
