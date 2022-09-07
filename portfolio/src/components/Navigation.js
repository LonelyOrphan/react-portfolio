import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContactModal from "./ContactModal";

export default function Navigation({ changeContent }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  console.log(show);

  return (
    <>
      <Navbar className="nav" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="nav-link"
              onClick={() => changeContent("aboutMe")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              onClick={() => changeContent("myWork")}
            >
              My Work
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://lonelyorphan.github.io/portfolio/assets/CV_NatashaSunita.pdf"
            >
              CV
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={handleShow}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <ContactModal isVisible={show} setShow={setShow} />
    </>
  );
}
