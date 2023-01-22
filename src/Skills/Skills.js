import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import { faHtml5, faCss3, faReact, faNodeJs, faAngular, faBootstrap, faJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { Col } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './skills.css'

function Skills(){
    return(
        <div className="mt-1">
            <ListGroup horizontal >
                <ListGroup.Item className='skills'><strong className="align-items-center">Skills</strong></ListGroup.Item>
                <Row className="g-0">
                    <OverlayTrigger placement="top"
                    overlay={
                    <Tooltip id="button-tooltip-2">
                        HTML5
                    </Tooltip>
                    }><Col lg={3} md={3} sm={2} xs={2}>
                        <ListGroup.Item><FontAwesomeIcon icon={faHtml5} size='xl' style={{color:'white'}}/></ListGroup.Item>
                    </Col></OverlayTrigger>
                <OverlayTrigger placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      CSS3
                    </Tooltip>
                  }><Col lg={3} md={3} sm={2} xs={2}>
                  <ListGroup.Item><FontAwesomeIcon icon={faCss3} size='xl' style={{color:'white'}}/></ListGroup.Item>
                </Col></OverlayTrigger>
                <OverlayTrigger placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      JavaScript
                    </Tooltip>
                  }><Col lg={3} md={3} sm={2} xs={2}>
                  <ListGroup.Item><FontAwesomeIcon icon={faJs} size='xl' style={{color:'white'}}/></ListGroup.Item>
                </Col></OverlayTrigger>
                <OverlayTrigger placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      React
                    </Tooltip>
                  }><Col lg={3} md={3} sm={2} xs={2}>
                  <ListGroup.Item><FontAwesomeIcon icon={faReact} size='xl' style={{color:'white'}}/></ListGroup.Item>
                </Col></OverlayTrigger>
                <OverlayTrigger placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      Bootstrap
                    </Tooltip>
                  }><Col lg={3} md={3} sm={2} xs={2}>
                  <ListGroup.Item><FontAwesomeIcon icon={faBootstrap} size='xl' style={{color:'white'}}/></ListGroup.Item>
                </Col></OverlayTrigger>
                <OverlayTrigger placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      Git
                    </Tooltip>
                  }><Col lg={3} md={3} sm={2} xs={2}>
                  <ListGroup.Item><FontAwesomeIcon icon={faGitAlt} size='xl' style={{color:'white'}}/></ListGroup.Item>
                </Col></OverlayTrigger>
                <OverlayTrigger placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      Angular
                    </Tooltip>
                  }><Col md={{offset:0, span:3}} lg={{offset:0, span:3}} sm={2} xs={{offset:4, span: 2}}>
                  <ListGroup.Item><FontAwesomeIcon icon={faAngular} size='xl' style={{color:'white'}}/></ListGroup.Item>
                </Col></OverlayTrigger>
                <OverlayTrigger placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      NodeJS
                    </Tooltip>
                  }><Col md={3} lg={3} sm={2} xs={2}>
                  <ListGroup.Item><FontAwesomeIcon icon={faNodeJs} size='xl' style={{color:'white'}}/></ListGroup.Item>
                </Col></OverlayTrigger>
              </Row>
            </ListGroup>
          </div>
    )
}

export default Skills;