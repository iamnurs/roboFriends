import React from "react";

const SearchBox = props => {
  return (
    <div className="ma3">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={props.onSearchChange}
        placeholder="Search robots"
      />
    </div>
  );
};

export default SearchBox;
