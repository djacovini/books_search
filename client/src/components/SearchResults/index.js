import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.res.map(res => (
        <li key={res} className="list-group-item">
          <img alt="Dog" src={res} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
