import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div>
      <h2>Search for Books!!!</h2>
      <form className="search">
        <label htmlFor="bookInput">Enter a Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="bookInput"
          list="books"
          type="text"
          className="form-control"
          placeholder="Book Title"
          id="book"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      
      </form>
    </div>
  );
}

export default SearchForm;
