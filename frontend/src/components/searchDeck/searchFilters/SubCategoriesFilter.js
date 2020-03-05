import React from "react";

const SubCategoriesFilter = props => {
  console.log("props", props);

  return (
    <>
      <h3 key={props.id} onClick={props.filterUsers}>
        {props.users}
      </h3>
    </>
  );
};

export default SubCategoriesFilter;
