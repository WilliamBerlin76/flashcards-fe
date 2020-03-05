import React from "react";


const UserFilter = props => {
  console.log(props.filterUsers);
  console.log(props.users)
  

  return (
    <>
      <h3 key={props.id} onClick={e=>{e.preventDefault(); props.filterClick('createdBy', props.users)}}>
        {props.users}
      </h3>
    </>
  );
};

export default UserFilter;
