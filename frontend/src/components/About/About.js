import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="left">
          <img src={profile_img} alt="" />
        </div>
        <div className="right">
          <div className="para">
            <p>I'm kartik Sharma Full Stack Developer</p>
            <p>My passion for Development is very charm</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {/* hr for progress bar of each skill */}
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Spring</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Spring Boot</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Spring MVC</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>spring Boot JDBC</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievment">
          <h1>Intern</h1>
          <p>Personal & Professional Projects</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>0</h1>
          <p>CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
