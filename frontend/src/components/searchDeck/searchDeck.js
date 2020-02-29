import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./navSearchBar.scss";
import "firebase/firestore";
import Loader from "react-loader-spinner";

import { firestore } from "../../App";
import DeckCards from "../dashboard/deckcards/deckcards";

const Loading = styled.div`
  margin-top: 10%;
  text-align: center;
`;

const SearchDeck = props => {
  const [publicDecks, setPublicDecks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState([]);
  let resultsArr = [];

  // console.log("publicDecks", publicDecks);
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

  const handleChange = e => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  const openDeck = (deck, user) => {
    props.history.push(`/${user}/${deck}/cards`);
    console.log(deck);
  };

  const handleSubmit = e => {
    e.preventDefault();
    publicDecks.filter(deck => {
      if (
        deck.deckName &&
        deck.deckName.toLowerCase() === searchField.toLowerCase()
      ) {
        resultsArr.push(deck);
      } else if (!deck.deckName) {
        console.log("Not Found");
      }
      setQuery(resultsArr);
      console.log("resultsArr", resultsArr);
      
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

      {/* if loading === "false" 
        display nothing */}

      {/* if is loading === "null" 
        No Deck Found */}

      {/* if deck found
        return filteredDecks */}
      

      {query.length === 0 ? (
        <div>
          <Loading>
            <Loader type="ThreeDots" color="#F66E00" height={80} width={80} />
          </Loading>
        </div>
      ) : (
        query.map(item => {
          console.log("item", item);
          return (
            <DeckCards
              key={Math.random()}
              // demo={item.demo}
              deckName={item.deckName}
              openDeck={openDeck}
            />
          );
        })
      )}
    </>
  );
};

export default SearchDeck;
