import React from "react";
import "./searchFilters.scss";


const UserFilter = props => (
  <div className = "cursor">
    <h3
      key={props.id}
      onClick={() => {
        props.filterClick("createdBy", props.users);
      }}
    >
      <p>{props.users}</p>
    </h3>
  </div>
);

export default UserFilter;
