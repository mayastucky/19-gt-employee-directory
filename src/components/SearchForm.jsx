import React from "react";

const styles = {
  buttonsStyle: {
    backgroundColor: "pink",
    border: "2px solid #AA9ABA",
    color: "black",
    marginTop: "5px",
    marginRight: "60%"
  },
  inputStyle: {
    width: "50%",
    marginLeft: "25%",
  },
};

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">
          Start Typing a Name to see Matching Results{" "}
        </label>
        <input
          style={styles.inputStyle}
          value={props.search}
          onChange={props.inputChanged}
          name="search"
          type="text"
          className="form-control"
          id="search"
        />
        {/* <button
          style={styles.buttonsStyle}
          type="submit"
          className="btn btn-success"
          onSubmit={props.handleSubmit}
        >
          Search
        </button> */}
        <br></br>
        <button
          type="button"
          style={styles.buttonsStyle}
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
