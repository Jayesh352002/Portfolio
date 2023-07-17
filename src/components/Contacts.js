import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Contacts() {
  return (
    <div
      className="container-fluid bg-dark"
      id="footer"
      style={{ textAlign: "center", padding: 100, height: 310, marginTop: 60 }}
    >
      <h2>Portfolio - Jayesh Bafna</h2>
      <a className="navbar-brand" href="#header" style={{fontSize:20}}>
        Home
      </a>
      <a className="navbar-brand" href="#about" style={{ marginLeft: 30 , fontSize:20 }}>
        About
      </a>
      <a className="navbar-brand" href="#projects" style={{ marginLeft: 30 , fontSize:20}}>
        Projects
      </a>
        <div>
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
    </div>
  );
}

export default Contacts;
