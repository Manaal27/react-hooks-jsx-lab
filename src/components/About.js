import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">

    <h2>About Me</h2>
    <p>manaal did this lab and enjoys learning react</p>
    <img src={image} alt="I made this" />

  </div>;
}

export default About;
