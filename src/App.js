// import React from "react";
import "./App.css";
import Title from "./components/Title";
import EmployeeRow from "./components/EmployeeRow";
import API from "./utils/API";

// function App() {
//   return (
//     <div className="App">
//       <Title />
//       <EmployeeRow />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";

class App extends Component {
  //this sets the state to an empty array of users
  state = {
    users: [],
  };

  //like document.ready, this
  componentDidMount() {
    this.generateEmployees();
  }

  generateEmployees = () => {
    API.getEmployees()
      .then((response) => this.setState({ users: response.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Title />
        {/* this renders the row and the information stored in the api JSON */}
        {/* we need to map over all the users and display their information in a table */}
        {this.state.users.map((employee) => (
          <EmployeeRow
            firstName={employee.name.first}
            lastName={employee.name.last}
            email={employee.email}
            phone={employee.phone}
            id={employee.id.value}
            src={employee.picture.large}
          />
        ))}
      </div>
    );
  }
}

export default App;
