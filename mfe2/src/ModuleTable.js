import React from 'react';
import './ModuleTable.css';

const ModuleTable = ({ title, tableData }) => {

  switch (title) {
    case 'Admin':
      return <div >
        <h3>{title}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
    case 'Functional Views':
      return <div >
        <h3>{title}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
    case 'Mission':
      return <h1>Mission Page Under Construction</h1>;
    case 'Recently Viewed':
      return <div >
        <h3>{title}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
    default:
      return <div >
        <h3>{title}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
  }

};

export default ModuleTable;
