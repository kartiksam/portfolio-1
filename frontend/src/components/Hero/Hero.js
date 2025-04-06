import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import resume from "../../assets/kartik sharma_Resume .pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* by giving this class to flex all willbe horizontal inner classname to design that component  */}
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm kartik Sharma,</span>a MERN Stack and Spring Developer
        passionate about building scalable web applications, based in India.
      </h1>
      <p>
        I'm Kartik Sharma, a recent Master's graduate in Computer Applications
        with a strong foundation in software development. I'm eager to apply my
        knowledge and contribute to a dynamic company.
      </p>
      <div className="hero-action">
        {/* genrally isnside div img,h1 tags  but here only div and inside content*/}
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
