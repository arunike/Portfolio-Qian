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
          <h3>Designed and Developed by Richie Zhou</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Richie</h3>
        </Col>
        <Col md="4">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <li className="social-icons">
              <a
                href="https://github.com/arunike"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
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