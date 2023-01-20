import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faNodeJs, faAngular, faBootstrap, faJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';

let proyectos = [
    {
        id: 1,
        titulo: "Proyecto 1",
        tecnologiasProyecto: ["HTML5", "Bootstrap", "CSS3", "JavaScript"],
        image: '',
        link:''
    },
    {
        id: 2,
        titulo: "Proyecto 2",
        tecnologiasProyecto: ["Angular", "Bootstrap", "CSS3", "HTML5"],
        image: '',
        link:''
    },
    {
        id: 3,
        titulo: "Proyecto 3",
        tecnologiasProyecto: ["React", "HTML5", "CSS3"],
        image: '',
        link:''
    },
    
]

let tecnologias = [
    {
        id: 1,
        nombre: "React",
        icon: faReact,
    },
    {
        id: 2,
        nombre: "Bootstrap",
        icon: faBootstrap,
    },
    {
        id: 3,
        nombre: "NodeJS",
        icon: faNodeJs,
    },
    {
        id: 4,
        nombre: "Angular",
        icon: faAngular,
    },
    {
        id: 5,
        nombre: "HTML5",
        icon: faHtml5,
    },
    {
        id: 6,
        nombre: "CSS3",
        icon: faCss3,
    },
    {
        id: 7,
        nombre: "JavaScript",
        icon: faJs,
    },
    {
        id: 8,
        nombre: "Git",
        icon: faGitAlt,
    },
]

function redireccionar(link) {
    window.open(link, "_blank");
}

function ProyectosCards() {
  return (
    <div>
      <h1>Mis Proyectos</h1>
        <Row>
            {proyectos.map((proyecto) => (
                <Col xs={12} md={4} className="my-3">
                <Card>
                    <Card.Img variant="top" src={proyecto.image} onClick={redireccionar(proyecto.link)}/>
                    <Card.Body className="text-center">
                        <Card.Title>{proyecto.titulo} </Card.Title>
                        <Card.Text>
                            {proyecto.tecnologiasProyecto.map((tecnologia) => (
                                <FontAwesomeIcon icon={tecnologias.find((t) => t.nombre === tecnologia).icon} size='xl' className="mx-1" style={{color:'white'}}/>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </div>
  );
}

export default ProyectosCards;