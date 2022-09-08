import React from "react";
import Card from "react-bootstrap/Card";

export default function Project(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        varient="top"
        src={`${process.env.PUBLIC_URL}/images/${props.image}`}
        alt="Card image"
      />
      <Card.Body className="text-center bg-light">
        <Card.Link href={props.projectURL}>{props.title}</Card.Link>
        <Card.Text>{props.descr}</Card.Text>
        <Card.Link className="card-link" href={props.repoLink}>
          Github Repo
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

{
  /* <a href={props.projectURL}></a> */
}
