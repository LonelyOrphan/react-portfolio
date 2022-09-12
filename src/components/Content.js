import React from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Content(props) {
  if (props.showContent === "aboutMe") {
    return (
      <main>
        {/* Avatar */}
        <img
          src="https://avatars.githubusercontent.com/u/43299917?v=4"
          className="avatar"
        />
        {/* Bio Text */}
        <div className="bio-text">
          <p>
            Full-stack web development student at the University of Birmingham
          </p>
          <p>Learning the following technologies:</p>
          <ul class="pt-3">
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
      // Dev Projects
      <Container className="justify-content-center">
        <Row className="mb-5">
          <Col sm={12} md={6} lg={6} xl={4}>
            {" "}
            <Project
              title={"Password Generator"}
              projectURL="https://lonelyorphan.github.io/password-generator/"
              repoLink="https://github.com/LonelyOrphan/password-generator"
              image="passwordgeneratorscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            {" "}
            <Project
              title={"Day Planner"}
              projectURL="https://lonelyorphan.github.io/day-planner/"
              repoLink="https://github.com/LonelyOrphan/day-planner"
              image="dayplannerscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            {" "}
            <Project
              title={"Code Quiz"}
              projectURL="https://lonelyorphan.github.io/timed-code-quiz/"
              repoLink="https://github.com/LonelyOrphan/timed-code-quiz"
              image="codequizscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            {" "}
            <Project
              title={"Weather Dashboard"}
              projectURL="https://lonelyorphan.github.io/weather-app/"
              repoLink="https://github.com/LonelyOrphan/weather-app"
              image="weatherdashboardscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            <Project
              title={"Money Mail"}
              projectURL="https://ss12932.github.io/currency-news-project/"
              repoLink="https://github.com/ss12932/currency-news-project"
              image="moneymailscreenshot_resized.jpg"
            />
          </Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            {" "}
            <Project
              title={"StayHaven"}
              projectURL="https://radiant-bayou-46133.herokuapp.com/"
              repoLink="https://github.com/frsargua/STAYHAVEN-APP"
              image="stayhaven_resized.jpg"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
