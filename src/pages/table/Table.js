import React from 'react';

const Table = () => {
  return (
    <center>
      <div className="tableCls custom-border" data-test="component-table">
        <table>
          <thead>
            <tr>
              <th>#Sl.No</th>
              <th>Employee Name</th>
              <th>Company Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rahul Kumar</td>
              <td>TCS</td>
              <td>America</td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  );
};

export default Table;
