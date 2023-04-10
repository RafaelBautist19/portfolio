import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function InformacionPersonal() {
  return (
    <div className="mt-1">
      <ListGroup variant="">
        <ListGroup.Item className="text-center">
          <strong>Información Personal</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Correo: </strong>
          <a href="mailto:rafael.bautista1@hotmail.es">
            rafael.bautista1@hotmail.es
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Telefono:</strong> +504-9520-2808
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Edad:</strong> 25 años
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Ubicación:</strong> Tegucigalpa, Honduras
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default InformacionPersonal;
