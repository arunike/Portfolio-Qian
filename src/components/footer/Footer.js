import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../../style.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by <a href="https://arunike.github.io/" style={{ color: "#c770f0", textDecoration: "none" }}>Richie Zhou</a> </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Richie</h3>
        </Col>
        <Col md="4">
          <ul style={{ display: "flex", justifyContent: "center", marginTop: "10px"}}>
            <li style={{height: "30px", width: "30px"}}>
              <a
                href="https://github.com/arunike"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/richiezhou/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;