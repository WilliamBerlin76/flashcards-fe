import React, { useState, useEffect } from "react";
import "./navSearchBar.scss";
import DeckList from "../deckList/DeckList";

import 'firebase/firestore';
import { firestore } from "../../App";

const SearchDeck = () => {
  const [publicDecks, setPublickDecks] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    firestore.collection("PublicDecks")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          console.log(doc.data());
          const decks = doc.data()
          // setPublickDecks(decks.deckName)
          console.log("Line 22", decks.deckName);
          
        });
      });
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  const filteredDecks = publicDecks.filter(decks =>
    decks.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="center">
      <input
        className="center"
        type="text"
        placeholder="Search Public Decks"
        onChange={handleChange}
        value={searchField}
      />

      <DeckList decks={filteredDecks} />
    </div>
  );
};

export default SearchDeck;
