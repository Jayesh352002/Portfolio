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
            href="https://drive.google.com/file/d/1nl9kFSxMg78EWX328wY2w8qe2Egqkie9/view?usp=sharing"
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
            href="https://drive.google.com/file/d/18hKLq9AM8U-AiSKEFD8vRGEPxRubAikm/view?usp=sharing"
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
