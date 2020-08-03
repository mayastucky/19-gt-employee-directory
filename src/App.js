import "./App.css";
import Title from "./components/Title";
import EmployeeRow from "./components/EmployeeRow";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import React, { Component } from "react";

class App extends Component {
  //this sets the state to an empty array of users
  state = {
    users: [],
    // results: [],
    sorted: "ascending",
    searchedEmployees: [],
    search: "",
  };

  //like document.ready, this will load the page with a list of randomly generated people
  componentDidMount() {
    this.generateEmployees();
  }

  generateEmployees = () => {
    API.getEmployees()
      .then((response) =>
        this.setState({
          users: response.data.results,
          searchedEmployees: response.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    // this.setState({ search: event.target.value });
    const searchedName = event.target.value;
    const searchedEmployees = this.state.users.filter((employees) => {
      const { first: firstName, last: lastName } = employees.name;
      const searchedEmployeesName = `${firstName} ${lastName}`;
      return searchedEmployeesName
        .toLowerCase()
        .includes(searchedName.toLowerCase().trim());
    });
    this.setState({
      searchedEmployees: searchedEmployees,
      search: searchedName,
    });
  };

  handleSortByName = () => {
    const sortEl = this.state.users;
    if (this.state.sorted === "ascending") {
      const sorted = sortEl.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
      this.setState({
        users: sorted,
        sorted: "descending",
      });
    } else {
      const sorted = sortEl.sort((a, b) =>
        a.name.last > b.name.last ? -1 : 1
      );
      this.setState({
        users: sorted,
        sorted: "ascending",
      });
    }
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({ search: event.target.value });
  // };
  render() {
    return (
      <div className="App">
        <Title />
        <SearchForm
          // onChange={this.handleInputChange}
          sortByName={this.handleSortByName}
          inputChanged={this.handleInputChange}
        />
        {/* this renders the row and the information stored in the api JSON */}
        {/* we need to map over all the users and display their information in a table */}
        {this.state.searchedEmployees.map((employee) => (
          <EmployeeRow
            firstName={employee.name.first}
            lastName={employee.name.last}
            email={employee.email}
            phone={employee.phone}
            src={employee.picture.large}
            // onClick={this.sortByName}
          />
        ))}
      </div>
    );
  }
}

export default App;
