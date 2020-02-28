import React, { useState, useEffect } from "react";
import "./navSearchBar.scss";
import DeckList from "../deckList/DeckList";

import "firebase/firestore";
import { firestore } from "../../App";

const SearchDeck = () => {
  const [publicDecks, setPublicDecks] = useState([]);
  const [searchField, setSearchField] = useState("");
  console.log("publicDecks", publicDecks);

  useEffect(() => {
    firestore.collection("PublicDecks").onSnapshot(snapshot => {
      const deckArr = [];
      snapshot.forEach(doc => {
        deckArr.push(doc.data());
      });
      setPublicDecks(deckArr);
    });
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  const filteredDecks = publicDecks.filter(decks => {
    const results = decks.deckName
    console.log("results", results);
    
  });
  console.log("filteredDecks", filteredDecks);

  return (
    <>
      <form>
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
    </>
  );
};

export default SearchDeck;

// const filteredDecks = publicDecks.filter(decks =>
//   decks.deckName.toLowerCase().includes(searchField.toLowerCase())
// );
