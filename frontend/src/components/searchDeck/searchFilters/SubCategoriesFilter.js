import React from "react";

const SubCategoriesFilter = props => (
  <>
    <h3
      key={props.id}
      onClick={() => {
        props.filterClick("tags", props.tags);
      }}
    >
      {props.tags}
    </h3>
  </>
);

export default SubCategoriesFilter;
