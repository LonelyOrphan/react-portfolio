import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ContactModal(props) {
  // const [show, setShow] = useState(false);
  const handleClose = () => {
    console.log("close");
    props.setShow(false);
  };
  return (
    <>
      <Modal show={props.isVisible} onHide={handleClose}>
        <Modal.Header className="contact-modal" closeButton>
          <Modal.Title className="contact-modal contact-text">
            Natasha Sunita Contact Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-modal">
          {" "}
          <ul className="contact-text">
            <li>Email: natashasunita90@gmail.com</li>
            <li>Phone: +44 7378 350739</li>
            <li>
              LinkedIn:{" "}
              <a
                className="contact-text"
                href="https://www.linkedin.com/in/natasha-sunita-567b1476/"
              >
                https://www.linkedin.com/in/natasha-sunita-567b1476/"
              </a>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer className="contact-modal">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<ContactModal />);
