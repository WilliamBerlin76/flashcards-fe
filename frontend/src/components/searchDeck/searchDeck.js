import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navSearchBar.scss";
import DeckList from "../deckList/DeckList";

const SearchDeck = () => {
  const [publicDecks, setPublickDecks] = useState([]);
  const [searchField, setSearchField] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("endpoint")
  //     .then(res => setPublicDecks(res.data))
  //     .catch(err => err.response);
  // }, []);

  const handleChange = e => {
    e.preventDefault();
    setSearchField(e.target.value);
    console.log({ searchField });
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
