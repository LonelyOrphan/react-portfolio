import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import { Navbar, Jumbotron, Button } from "react-bootstrap";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [chosenContent, setChosenContent] = useState("aboutMe");
  console.log(chosenContent);
  return (
    <>
      <Header changeContent={setChosenContent} />
      <Content showContent={chosenContent} />
      <Footer />
    </>
  );
}

export default App;
