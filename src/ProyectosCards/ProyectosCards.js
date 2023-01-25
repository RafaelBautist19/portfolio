import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faNodeJs, faAngular, faBootstrap, faJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import './ProyectosCards.css';

let proyectos = [
    {
        id: 1,
        titulo: "Clon de Whatsapp",
        tecnologiasProyecto: ["HTML5", "Bootstrap", "CSS3", "JavaScript"],
        image: './images/Clon-Whatsapp.png',
        link:'https://rafaelbautist19.github.io/Clon-Whatsapp/',
        descripcion: "Clon de Whatsapp realizado con HTML5, CSS3, Bootstrap y JavaScript para la clase de Desarrollo Web. Este proyecto esta orientado a Mobile First, por lo que su visualización es correcta solo en dispositivos móviles."
    },
    {
        id: 2,
        titulo: "Batatabit",
        tecnologiasProyecto: ["CSS3", "HTML5"],
        image: './images/Batatabit.png',
        link:'https://rafaelbautist19.github.io/mobile-first-platzi/',
        descripcion: "Batata App es un proyecto realizado para la clase de Mobile First de Platzi. Este proyecto se puede visualizar correctamente tanto en dispositivos móviles como en computadoras."
    },
    {
        id: 3,
        titulo: "Google Clone",
        tecnologiasProyecto: ["HTML5", "CSS3"],
        image: './images/Google-Clone.png',
        link:'https://rafaelbautist19.github.io/clon-google-platzi/',
        descripcion: "Clon de Google realizado con HTML5 y CSS3 para la clase de Curso Práctico de HTML y CSS de Platzi. Este proyecto se puede visualizar correctamente tanto solo en computadoras."
    },
    {
        id: 4,
        titulo: "TODO Reminder",
        tecnologiasProyecto: ["HTML5", "CSS3", "React", "JavaScript"],
        image: './images/TODO.png',
        link:'https://rafaelbautist19.github.io/TODO-Reminder/',
        descripcion: "TODO Reminder es un proyecto realizado con React para la clase de React de Platzi. Este proyecto se puede visualizar correctamente tanto en dispositivos móviles como en computadoras."
    },
    // {
    //     id: 5,
    //     titulo: "Google Clone",
    //     tecnologiasProyecto: ["HTML5", "CSS3"],
    //     image: './images/Google-Clone.png',
    //     link:'https://rafaelbautist19.github.io/clon-google-platzi/',
    //     descripcion: "Clon de Google realizado con HTML5 y CSS3 para la clase de Curso Práctico de HTML y CSS de Platzi. Este proyecto se puede visualizar correctamente tanto solo en computadoras."
    // },
    // {
    //     id: 6,
    //     titulo: "Google Clone",
    //     tecnologiasProyecto: ["HTML5", "CSS3"],
    //     image: './images/Google-Clone.png',
    //     link:'https://rafaelbautist19.github.io/clon-google-platzi/',
    //     descripcion: "Clon de Google realizado con HTML5 y CSS3 para la clase de Curso Práctico de HTML y CSS de Platzi. Este proyecto se puede visualizar correctamente tanto solo en computadoras."
    // },
    // {
    //     id: 7,
    //     titulo: "Google Clone",
    //     tecnologiasProyecto: ["HTML5", "CSS3"],
    //     image: './images/Google-Clone.png',
    //     link:'https://rafaelbautist19.github.io/clon-google-platzi/',
    //     descripcion: "Clon de Google realizado con HTML5 y CSS3 para la clase de Curso Práctico de HTML y CSS de Platzi. Este proyecto se puede visualizar correctamente tanto solo en computadoras."
    // },
    
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

function ProyectosCards() {
  return (
    <div>
      <h1>Mis Proyectos</h1>
        <Row>
            {proyectos.map((proyecto) => (
                <Col xs={12} md={4} className="my-3">
                <Card>
                    <a href={proyecto.link} target="_blank" rel="noreferrer">
                        <Card.Img variant="top" src={proyecto.image}/>
                    </a>
                    <Card.Body className="text-center">
                        <Card.Title>{proyecto.titulo} </Card.Title>
                        <Card.Text>
                            {proyecto.tecnologiasProyecto.map((tecnologia) => (
                                <FontAwesomeIcon icon={tecnologias.find((t) => t.nombre === tecnologia).icon} size='xl' className="mx-1" style={{color:'white'}}/>
                            ))}
                        </Card.Text>
                        <Card.Text className="descripcion">
                            {proyecto.descripcion}
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