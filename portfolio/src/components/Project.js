import React from "react";
import Card from "react-bootstrap/Card";

export default function Project(props) {
  return (
    <Card className="bg-dark text-white" style={{ width: "20rem" }}>
      <Card.Img src={props.imgsrc} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{props.title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}
