import React from "react";
import "./searchFilters.scss";

const SubCategoriesFilter = props => (
  <div  className = "cursor">
    <h3
      key={props.id}
      onClick={() => {
        props.filterClick("tags", props.tags);
      }}
    >
      <p>{props.tags}</p>
    </h3>
  </div>
);

export default SubCategoriesFilter;
