import React, { useState, useEffect } from "react";
import "./navSearchBar.scss";
import "firebase/firestore";
import { firestore } from "../../App";
import "../dashboard/deckcards/deckcards.scss";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import UserFilter from "./searchFilters/UserFilter";
import { filterUsers } from "../../actions";

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = {
  filterUsers
};

const SearchDeck = props => {
  const [publicDecks, setPublicDecks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState([]);
  const [users, setUsers] = useState([]);
  const resultsArr = [];
  const usersList = [];

  /**
   * State Console Logs
   */
  console.log("publicDecks", publicDecks);
  console.log("query", query);
  console.log("Users", users);

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
        usersList.push(deck.createdBy);
        setSearchField("");
      } else {
        console.log("Not Found");
        setSearchField("");
      }
      /**
       * Setting State here
       */
      setQuery(resultsArr);
      setUsers(usersList);
    });
  };

  const filterClick = (filter, val) => {
    const newQuery = query.filter(item =>{
      if (filter === 'tags' && item.tags.includes(val)) {
        return item;
      }else if(item[filter] === val){
        return item;
      } else {
        return null;
      }
    })
    setQuery(newQuery)
  }

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
      <Grid container>
        <Grid item md={3} xs={12}>
          {query.length > 0 ? <h2>Users</h2> : null}
          {query
            ? users.map((users, id) => <UserFilter key={id} query={query} users={users} filterUsers={filterUsers} filterClick={filterClick}/>)
            : null}
        </Grid>
        <Grid item md={9} xs={12}>
          <div className="decks-section">
            {query
              ? query.map(item => {
                  const id = Math.random();
                  return (
                    <div className="deckcard-div" key={id} onClick={openDeck}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDeck);
