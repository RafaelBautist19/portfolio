import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from 'react-bootstrap/Card';
import { Sidebar } from "./Sidebar/Sidebar";
import Proyectos from "./Proyectos/Proyectos";
import "./App.css";
import React from "react";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <Container fluid>
      <Row>
        <Col
          sm={12}
          md={4}
          lg={3}
          id="sidebar"
          className={
            width < 768
              ? "sidebar d-md-flex flex-column flex-shrink-0 p-3"
              : "sidebar d-md-flex flex-column flex-shrink-0 p-3 sticky-top"
          }
        >
          <Sidebar />
        </Col>
        <Col
          sm={12}
          md={8}
          lg={9}
          style={{ padding: 0, backgroundColor: "#eaeaea" }}
        >
          <Proyectos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
