import React from "react";
import Project from "./Project";

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
    return <Project />;
  }
}
