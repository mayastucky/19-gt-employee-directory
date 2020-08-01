import "./App.css";
import Title from "./components/Title";
import EmployeeRow from "./components/EmployeeRow";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import React, { Component } from "react";

class App extends Component {
  //this sets the state to an empty array of users
  state = {
    search: "",
    users: [],
    results: [],
  };

  //like document.ready, this will load the page with a list of randomly generated people
  componentDidMount() {
    this.generateEmployees();
  }

  generateEmployees = () => {
    API.getEmployees()
      .then((response) => this.setState({ users: response.data.results }))
      .catch((err) => console.log(err));
  };

  // handleInputChange = (event) => {
  //   this.setState({ search: event.target.value });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({ search: event.target.value });
  // };
  render() {
    return (
      <div className="App">
        <Title />
        <SearchForm />
        {/* this renders the row and the information stored in the api JSON */}
        {/* we need to map over all the users and display their information in a table */}
        {this.state.users.map((employee) => (
          <EmployeeRow
            firstName={employee.name.first}
            lastName={employee.name.last}
            email={employee.email}
            phone={employee.phone}
            src={employee.picture.large}
          />
        ))}
      </div>
    );
  }
}

export default App;
