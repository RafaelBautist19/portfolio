import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import { Sidebar } from './Sidebar/Sidebar';
import Proyectos from './Proyectos/Proyectos';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={3} md={3} className="sidebar d-flex flex-column flex-shrink-0 p-3 sticky-top">
          <Sidebar/>
        </Col>
        <Col xs={9} md={9} style={{padding:0, backgroundColor:'#eaeaea'}}>
          <Proyectos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
