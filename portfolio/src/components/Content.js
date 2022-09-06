import React from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Content(props) {
  if (props.showContent === "aboutMe") {
    return (
      <main>
        <div className="bio-text">
          <p>
            Full-stack web development student at the University of Birmingham
          </p>
          <p>Learning the following technologies:</p>
          <ul class="pt-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Web APIs</li>
            <li>Node JS</li>
            <li>Express.js</li>
            <li>SQL / MongoDB</li>
            <li>React</li>
            <li>ORM (Sequelize) / ODM (Mongoose)</li>
          </ul>
        </div>
      </main>
    );
  } else if (props.showContent === "myWork") {
    return (
      <Container className="justify-content-center">
        <Row className="mb-5">
          <Col sm={12} md={6} lg={6} xl={6}>
            {" "}
            <Project
              title={"Password Generator"}
              projectURL="https://github.com/LonelyOrphan/password-generator"
              image="passwordgeneratorscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            {" "}
            <Project
              title={"Day Planner"}
              image="dayplannerscreenshot_resized.jpg"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} xl={4}>
            {" "}
            <Project
              title={"Weather Dashboard"}
              image="weatherdashboardscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            <Project
              title={"Money Mail"}
              image="moneymailscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            {" "}
            <Project title={"StayHaven"} image="stayhaven_resized.jpg" />
          </Col>
        </Row>
      </Container>
    );
  }
}
