import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function Project(props) {
  return (
    <a href={props.projectURL}>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          varient="top"
          src={`images/${props.image}`}
          alt="Card image"
        />
        <Card.Body className="text-center bg-light">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.descr}</Card.Text>
          <Card.Link className="card-link" href={props.repoLink}>
            Github Repo
          </Card.Link>
        </Card.Body>
      </Card>
    </a>
  );
}
