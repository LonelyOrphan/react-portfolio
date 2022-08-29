import React from "react";
import Navigation from "./Navigation";

export default function Header({ changeContent }) {
  return (
    <div>
      <Navigation changeContent={changeContent} />
      <h1>Natasha Sunita Portfolio</h1>
    </div>
  );
}
