import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Header() {
  return (
    <div className="container-fluid bg-dark" id="header">
      <h1>Hello There </h1>
      <h1>I am Jayesh Bafna </h1>
      <h1>Full Stack Java Developer </h1>
      <a
        href="https://github.com/Jayesh352002"
        target="blank"
        style={{ textDecoration: "none", color: "white" }}
      >
        <AiFillGithub style={{ width: 40, height: 40, margin: 20 }} />
      </a>
      <a
        href="https://www.instagram.com/jayesh__352__/"
        target="blank"
        style={{ textDecoration: "none", color: "white" }}
      >
        <AiFillInstagram style={{ width: 40, height: 40, margin: 20 }} />
      </a>
      <a
        href="https://www.linkedin.com/in/jayesh-bafna-3a4b1920a/"
        target="blank"
        style={{ textDecoration: "none", color: "white" }}
      >
        <AiFillLinkedin style={{ width: 40, height: 40, margin: 20 }} />
      </a>
    </div>
  );
}

export default Header;
