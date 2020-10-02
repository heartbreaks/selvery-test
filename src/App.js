import React from 'react';
import FormRunners from './FormRunners'
import Container from "react-bootstrap/Container";
import TableRunners from "./Table/TableRunners";

function App() {
  return (
    <div className="App">
        <Container>
                <h1>Add new person</h1>
                <FormRunners />
                <TableRunners />
        </Container>
    </div>
  );
}

export default App;
