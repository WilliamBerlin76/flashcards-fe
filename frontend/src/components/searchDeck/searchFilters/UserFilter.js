import React from "react";


const UserFilter = props => {
  console.log(props.filterUsers);
  

  return (
    <>
      <h3 key={props.id} onClick={props.filterUsers}>
        {props.users}
      </h3>
    </>
  );
};

export default UserFilter;
