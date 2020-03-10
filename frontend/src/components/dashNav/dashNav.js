import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

import "./dashNav.scss";

const DashNav = props => {
  const [curUser, setCurUser] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setCurUser(true);
      } else {
        return null;
      }
    });
  }, []);

  return (
    <div className="dashNav">
      <div className="mNeme">
        <span className="m">m</span>
        <span className="neme">Neme</span>
      </div>

      <div className="rightNav-wrapper">
        <Link to={"/search"}>
          search
        </Link>

        {curUser ? (
          <img
            src={firebase.auth().currentUser.photoURL}
            alt="profile pic"
            className="desk-dash-pic"
          />
        ) : null}
      </div>
    </div>
  );
};
export default DashNav;
