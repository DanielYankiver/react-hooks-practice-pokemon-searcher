import React from "react";

function Search({ onSearch , currentSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={currentSearch} onChange={onSearch}  />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
