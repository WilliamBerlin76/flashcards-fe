import React from "react";

const UserFilter = props => (
  <>
    <h3
      key={props.id}
      onClick={() => {
        props.filterClick("createdBy", props.users);
      }}
    >
      {props.users}
    </h3>
  </>
);

export default UserFilter;
