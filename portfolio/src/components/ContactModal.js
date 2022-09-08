import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

export default function ContactModal(props) {
  const [inputName, setInputName] = useState("Your Name");
  const [inputEmail, setInputEmail] = useState("Your Email");
  const [inputMessage, setInputMessage] = useState("Your Message");

  const updateName = () => {
    setInputName("This name is required");
  };

  const updateEmail = () => {
    setInputEmail("Your email is required");
  };

  const updateMessage = () => {
    setInputMessage("Your Message is required");
  };

  const handleClose = () => {
    console.log("close");
    props.setShow(false);
  };

  return (
    <>
      <Modal show={props.isVisible} onHide={handleClose}>
        <Modal.Header className="contact-modal" closeButton>
          <Modal.Title className="contact-modal contact-text">
            Natasha Sunita Contact Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-modal">
          {" "}
          <form>
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder={inputName}
                name="name"
                onBlur={updateName}
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder={inputEmail}
                name="email"
                onBlur={updateEmail}
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder={inputMessage}
                name="message"
                onBlur={updateMessage}
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <button className="submitBtn" type="submit">
                Send a message
              </button>
            </div>
          </form>
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
