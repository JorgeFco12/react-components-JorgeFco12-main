import React from "react";

function Tabla() {
  const tableContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh", 
  };

  const tableStyle = {
    width: "50%", 
  };

  const thStyle = {
    backgroundColor: "gray", 
    padding: "20px", 
    flex: "1", 
  };

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Apellido</th>
            <th style={thStyle}>Edad</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
