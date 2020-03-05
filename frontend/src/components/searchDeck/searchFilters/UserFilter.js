import React from "react";


const UserFilter = props => {
  console.log(props.filterUsers);
  

  return (
    <>
      <h3 key={props.id} onClick={e=>{e.preventDefault(); props.userClick(props.users)}}>
        {props.users}
      </h3>
    </>
  );
};

export default UserFilter;
