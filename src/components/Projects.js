import React from "react";

import project2 from "../images/project2.PNG";
import project3 from "../images/project3.jpeg";
import project4 from "../images/project4.PNG";
import project6 from "../images/project6.jpg";
import project7 from "../images/project7.PNG";
import project8 from "../images/project8.PNG";

function Projects() {
  return (
    <div className="project-main-section" id="projects">
      <h1 className="project-title">Projects</h1>
      <hr className="line"></hr>
      <div className="project-section1">
        <div className="card" style={{ width: 350, marginLeft: 90 }}>
          <h4 className="card-header" style={{ textAlign: "center" }}>
            Smart Connect
          </h4>
          <div className="card-body">
            <img src={project7} alt="Profile" className="project-img1"></img>
            <p
              className="card-title"
              style={{
                marginTop: 30,
                marginLeft: 10,
                width: 320,
                fontSize: 16,
              }}
            >
              Smart Connect is Contact App using which user can save and manage contacts easily and smartly.
            </p>
            <a
              href="https://github.com/Jayesh352002/SmartConnect"
              className="btn btn-primary"
              target="blank"
              style={{ marginTop: 30, marginLeft: 55, width: 200 }}
            >
              Get Source Code
            </a>
          </div>
        </div>

        <div className="card" style={{ width: 350, marginLeft: 50 }}>
          <h4 className="card-header" style={{ textAlign: "center" }}>
            Tic Tac Toe Game
          </h4>
          <div className="card-body">
            <img src={project2} alt="Profile" className="project-img1"></img>
            <p
              className="card-title"
              style={{
                marginTop: 30,
                marginLeft: 10,
                width: 320,
                fontSize: 16,
              }}
            >
              Created Tic Tac Toe Game in React JS
            </p>
            <a
              href="https://github.com/Jayesh352002/Tic-Tac-Toe-Game"
              className="btn btn-primary"
              target="blank"
              style={{ marginTop: 30, marginLeft: 55, width: 200 }}
            >
              Get Source Code
            </a>
          </div>
        </div>

        <div className="card" style={{ width: 350, marginLeft: 50 }}>
          <h4 className="card-header" style={{ textAlign: "center" }}>
            Food Runner App
          </h4>
          <div className="card-body">
            <img src={project3} alt="Profile" className="project-img1"></img>
            <p
              className="card-title"
              style={{
                marginTop: 30,
                marginLeft: 10,
                width: 320,
                fontSize: 16,
              }}
            >
              Food Ordering Android Application Using Kotlin and Room Database
            </p>
            <a
              href="https://github.com/Jayesh352002/FoodOrderApp"
              className="btn btn-primary"
              target="blank"
              style={{ marginTop: 30, marginLeft: 55, width: 200 }}
            >
              Get Source Code
            </a>
          </div>
        </div>
      </div>

      <div className="project-section2">
        <div className="card" style={{ width: 350, marginLeft: 90 }}>
          <h4 className="card-header" style={{ textAlign: "center" }}>
            Budget Calculator
          </h4>
          <div className="card-body">
            <img src={project4} alt="Profile" className="project-img1"></img>
            <p
              className="card-title"
              style={{
                marginTop: 30,
                marginLeft: 10,
                width: 320,
                fontSize: 16,
              }}
            >
              Angular JS web application for calculating daily expenses
            </p>
            <a
              href="https://github.com/Jayesh352002/DailyExpenseAPP"
              className="btn btn-primary"
              target="blank"
              style={{ marginTop: 30, marginLeft: 55, width: 200 }}
            >
              Get Source Code
            </a>
          </div>
        </div>

        <div className="card" style={{ width: 350, marginLeft: 50 }}>
          <h4 className="card-header" style={{ textAlign: "center" }}>
            Weather App
          </h4>
          <div className="card-body">
            <img src={project8} alt="Profile" className="project-img1"></img>
            <p
              className="card-title"
              style={{
                marginTop: 30,
                marginLeft: 10,
                width: 320,
                fontSize: 16,
              }}
            >
              This is Weather Application created in angular in integration with Weather API.
            </p>
            <a
              href="https://github.com/Jayesh352002/WeatherApp"
              className="btn btn-primary"
              target="blank"
              style={{ marginTop: 30, marginLeft: 55, width: 200 }}
            >
              Get Source Code
            </a>
          </div>
        </div>

        <div className="card" style={{ width: 350, marginLeft: 50 }}>
          <h4 className="card-header" style={{ textAlign: "center" }}>
            Voice Based Email System
          </h4>
          <div className="card-body">
            <img src={project6} alt="Profile" className="project-img1"></img>
            <p
              className="card-title"
              style={{
                marginTop: 30,
                marginLeft: 10,
                width: 320,
                fontSize: 16,
              }}
            >
              Created voice based email system for blind peoples using Django and STT & TTS API
            </p>
            <a
              href="https://github.com/Jayesh352002/Voice-Based-Email-System"
              className="btn btn-primary"
              target="blank"
              style={{ marginTop: 30, marginLeft: 55, width: 200 }}
            >
              Get Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
