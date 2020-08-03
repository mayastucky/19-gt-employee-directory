import React from "react";

const TableHeading = () => {
  return (
    <div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID Picture</th>
              <th scope="col" style={{ paddingLeft: "150px" }}>
                {/* <button>Name</button> */} Name
              </th>
              <th scope="col" style={{ paddingLeft: "175px" }}>
                Email
              </th>
              <th scope="col" style={{ paddingLeft: "300px" }}>
                Phone
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default TableHeading;
