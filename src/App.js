import "./App.css";
import Title from "./components/Title";
import EmployeeRow from "./components/EmployeeRow";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import React, { Component } from "react";
import TableHeading from "./components/TableHeading";

class App extends Component {
  //this sets the state to an empty array of users, the sort order to "ascending" so we can change it via button click, the searchedEmployees
  //array will change when the user types but is initially just the entire array of users, and the search just shows what the user has typed
  state = {
    users: [],
    sorted: "ascending",
    searchedEmployees: [],
    search: "",
  };

  //like document.ready, this will load the page with a list of randomly generated people
  componentDidMount() {
    this.generateEmployees();
  }

  //this gives us a list from API.js, then it sets the users and searchedEmployees states to the list from the API.
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
    //variable of the searched name being = to whatever was typed in the input field
    const searchedName = event.target.value;
    // this is setting the state of searchedEmployee = to a filtered list of employees.
    const searchedEmployees = this.state.users.filter((employees) => {
      //we filter this list by deconstructing the name and setting it equal to employees.name
      const { first: firstName, last: lastName } = employees.name;
      //then we return the employees name that includes the searchedName
      const searchedEmployeesName = `${firstName} ${lastName}`;
      return searchedEmployeesName
        .toLowerCase()
        .includes(searchedName.toLowerCase().trim());
    });
    //then we alter the state for the searchedEmployee state to be equal to the filtered employees
    this.setState({
      searchedEmployees: searchedEmployees,
      search: searchedName,
    });
  };

  //this funky code sorts the users last name alphabetically (from a-z and then from z-a) using the javascript .sort method
  handleSortByName = () => {
    const sortEl = this.state.searchedEmployees;
    if (this.state.sorted === "ascending") {
      const sorted = sortEl.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
      //this sets the state of the searchedEmployees to the sorted list from a-z
      this.setState({
        searchedEmployees: sorted,
        sorted: "descending",
      });
    } else {
      const sorted = sortEl.sort((a, b) =>
        a.name.last > b.name.last ? -1 : 1
      );
      //this sets the state of searchedEmployees to the sorted list from z-a
      this.setState({
        searchedEmployees: sorted,
        sorted: "ascending",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Title />
       
        <SearchForm
          sortByName={this.handleSortByName}
          inputChanged={this.handleInputChange}
        />
         <TableHeading />
        {/* this renders the row and the information stored in the api JSON */}
        {/* we need to map over all the users and display their information in a table */}
        {this.state.searchedEmployees.map((employee) => (
          <EmployeeRow
            key={employee.login.uuid}
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
