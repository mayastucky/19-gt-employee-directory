import React from "react";
// here we pass in the props (like attributes from JS)
const EmployeeRow = (props) => {
  const styles = {
    tableStyle: {
      text: "center",
    },
  };

  return (
    <div className="container">
      <table className="table" style={styles.textStyle}>
        <tbody>
          {/* we need a row with all the information of each employee */}
          <tr>
            <td>
              <img src={props.src} alt={props.firstName}></img>
            </td>
            <td>
              {props.firstName} {props.lastName}
            </td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRow;
