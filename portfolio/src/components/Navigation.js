import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation({ changeContent }) {
  return (
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
          <Nav.Link onClick={() => changeContent("myWork")}>My Work</Nav.Link>
          <Nav.Link href="#cv">CV</Nav.Link>
          <Nav.Link href="#contactme">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <nav class="navbar navbar-expand-lg">
    //   <div class="container-fluid">
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       class="collapse navbar-collapse justify-content-end"
    //       id="navbarSupportedContent"
    //     >
    //       <ul class="navbar-nav mb-2 mb-lg-0">
    //         <li class="nav-item mx-5">
    //           <a
    //             class="nav-link active text-white"
    //             aria-current="page"
    //             href="./my-work.html"
    //           >
    //             My Work
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link text-white" href="www.google.com">
    //             Contact Me
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
