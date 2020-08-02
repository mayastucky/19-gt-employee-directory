import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          id="search"
        />
        <button
          type="submit"
          className="btn btn-success"
          onSubmit={props.handleSubmit}
        >
          Search
        </button>{" "}
        <br></br>
        <button
          type="button"
          className="btn btn-success"
          onClick={props.sortByName}
        >
          Sort By Last Name
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
