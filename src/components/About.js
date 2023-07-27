import React from "react";
import profilephoto from "../images/ResumePic1.jpeg";

function About() {
  return (
    <div id="about">
      <h1 className="about-title">About Me</h1>
      <hr className="line"></hr>

      <div className="about-main-section">
        <div className="about-img">
          <img src={profilephoto} alt="Profile" className="profile-img"></img>
        </div>

        <div className="about-info">
          <p>
            I am passionate software developer and enthusiast android app
            developer. UG student at DYPCOE. My recent success include that I
            have completed Oracle Certified Associate Java SE 8 Programmer
            Certification. I have recently completed my 3 months Java full stack
            developer internship at Virtusa. <br />
            <br />
            Programming Languages Known : C++, Java, Python, HTML, CSS,
            JavaScript, Angular, Springboot
          </p>
          <br />

          <a
            href="https://drive.google.com/file/d/1aJueXjRu5-g69XdxgftWnNuI09Wl11MY/view?usp=sharing"
            className="btn"
            target="blank"
            type="button"
            style={{
              backgroundColor: "#C3073F",
              color: "white",
              marginRight: 40,
            }}
          >
            Get Resume
          </a>

          <a
            className="navbar-brand"
            href="https://drive.google.com/file/d/1XSaN1vwnpU13ncVdSbVJTLFmryHRzq6g/view?usp=sharing"
            target="blank"
            style={{ marginLeft: 30, color: "#1434A4" }}
          >
            Education Details 
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
