import React from "react";
import Navigation from "./Navigation";

export default function Header({ navLink }) {
  return (
    <div>
      <Navigation navLink={navLink} />
      <h1>Natasha Sunita Portfolio</h1>
    </div>
  );
}
