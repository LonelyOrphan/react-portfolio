import React from "react";
import Card from "react-bootstrap/Card";

export default function Project(props) {
  return (
    <Card className="mb-4" style={{ width: "34rem" }}>
      <Card.Img
        varient="top"
        className="cardImg"
        src={`${process.env.PUBLIC_URL}/images/${props.image}`}
        alt="Card image"
      />
      <Card.Body className="text-center bg-light">
        <Card.Link className="card-link-a" href={props.projectURL}>
          {props.title}
        </Card.Link>
        <Card.Link className="card-link-b" href={props.repoLink}>
          Github Repo
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

{
  /* <a href={props.projectURL}></a> */
}
