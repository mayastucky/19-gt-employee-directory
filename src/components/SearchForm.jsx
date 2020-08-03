import React from "react";

const styles = {
  buttonsStyle: {
    backgroundColor: "#ACBED8",
    border: "2px solid #AA9ABA",
    color: "black",
    marginTop: "5px",
    marginRight: "60%",
  },
  inputStyle: {
    border: "2px solid #ACBED8",
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
