import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import { Navbar, Jumbotron, Button } from "react-bootstrap";
import Header from "./components/Header";
import Content from "./components/Content";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
