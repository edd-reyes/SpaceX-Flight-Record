import React from "react";
import { useState } from "react";
import "./Search.scss";

const Search = () => {
  const [search, setSearch] = useState();

  return (
    <div>
      <input
        type="text"
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter Keyword"
      />
    </div>
  );
};

export default Search;
