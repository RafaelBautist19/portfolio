import React from "react";
import "./proyectos.css";
import { Container } from "react-bootstrap";
import ProyectosCards from "../ProyectosCards/ProyectosCards";

function Proyectos() {
  return (
    <div>
      <div className="about-myself">
        <Container>
          <h1>¿Quien soy?</h1>
          <p>
            Mi nombre es Rafael Bautista, soy Ingeniero en Sistemas, apasionado
            por la programación y aprender cosas nuevas. Mi enfoque siempre ha
            sido el desarrollo del lado del Frontend, pero tambien he tenido un
            poco de experiencia en desarrollo del lado del Backend.
          </p>
          <p>
            Soy desarrollador de software con experiencia en el desarrollo de
            aplicaciones web con AngularJS. Actualmente estoy aprendiendo sobre
            desarrollo de aplicaciones web con ReactJS, para posteriormente
            ampliar mi conocimiento al desarrollo de aplicaciones moviles con
            React Native.
          </p>
        </Container>
      </div>
      <div className="proyectos">
        <Container>
          <ProyectosCards />
        </Container>
      </div>
    </div>
  );
}

export default Proyectos;
