import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import { Navbar, Jumbotron, Button } from "react-bootstrap";
import Header from "./components/Header";
import Bio from "./components/Content";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  // declare state variable for conditionally rendering components
  const [section, setSection] = useState("bio");

  // render section based on state
  const showSection = () => {
    if (section == "bio") {
      return <Bio />;
    } else {
      return <Project />;
    }
  };

  // function to pass props to nav so nav links can update state
  const navLink = (clickedLink) => {
    setSection(clickedLink);
  };

  // function to pass props to header so title can be conditionally rendered

  return (
    <>
      <Header navLink={navLink} />
      {showSection()}
      <Footer />
    </>
  );
}

export default App;
