import React from "react";
// here we pass in the props (like attributes from JS)
const EmployeeRow = (props) => {
  return (
    <div>
      <h1>This will be the employee row here. </h1>
      <p>{props.firstName}</p>
    </div>
  );
};

export default EmployeeRow;
