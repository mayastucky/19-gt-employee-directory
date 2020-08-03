import React from "react";

const styles = {
  myJumbotron: {
    backgroundColor: "#E39774",
    color: "white",
  },
};

const Title = () => {
  return (
    <div id="header">
      <div className="jumbotron jumbotron-fluid" style={styles.myJumbotron}>
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            Search or filter through the directory to see all employees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
