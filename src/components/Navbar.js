import React from "react";


function Navbar() {
  return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/" style={{ marginLeft: 40 }}>
          Portfolio
        </a>
        <form className="d-flex">
          <a className="navbar-brand" href="#header">
            Home
          </a>
          <a className="navbar-brand" href="#about" style={{ marginLeft: 30 }}>
            About
          </a>
          <a className="navbar-brand" href="#projects" style={{ marginLeft: 30 }}>
            Projects            
          </a>
          <a
            href="https://drive.google.com/file/d/1aJueXjRu5-g69XdxgftWnNuI09Wl11MY/view?usp=sharing"
            target="blank"
            className="btn"
            type="button"
            style={{
              marginLeft: 30,
              backgroundColor: "#C3073F",
              color: "white",
              marginRight: 40,
            }}
          >
            Resume
          </a>
        </form>
      </nav>
      
  );
}

export default Navbar;
