import React, { useState, useEffect } from "react";
import "./navSearchBar.scss";
import DeckList from "../deckList/DeckList";

import "firebase/firestore";
import { firestore } from "../../App";

const SearchDeck = () => {
  const [publicDecks, setPublicDecks] = useState([]);
  const [searchField, setSearchField] = useState("");

  const deckArr = [];

  useEffect(() => {
    firestore
      .collection("PublicDecks")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          // console.log(doc.data());
          let deck = doc.data();
          deckArr.push(deck);
          setPublicDecks(deckArr);
          // console.log("deckArr", deckArr);
        });
        return deckArr;
      });
    // console.log("deckArr", deckArr);
    console.log("publicDecks", publicDecks);
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  // const filteredDecks = publicDecks.filter(decks =>
  //   decks.name.toLowerCase().includes(searchField.toLowerCase())
  // );

  return (
    <div className="center">
      <input
        className="center"
        type="text"
        placeholder="Search Public Decks"
        onChange={handleChange}
        value={searchField}
      />

      {/* <DeckList decks={filteredDecks} /> */}
    </div>
  );
};

export default SearchDeck;
