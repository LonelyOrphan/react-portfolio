import React from "react";
import Card from "react-bootstrap/Card";

export default function Project(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img varient="top" src={`images/${props.image}`} alt="Card image" />
      <Card.Body className="text-center bg-light">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.descr}</Card.Text>
        <Card.Link className="card-link" href="#">
          Github Repo
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
