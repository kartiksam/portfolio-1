import React from "react";
import "./Service.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const Service = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div id="services" className="services-container">
        {
          // service data is the array of objects apply flex to conatiner the all willbe horizontal because all will be div many compnents
          Services_Data.map((ser, index) => {
            // can do rertun or component name and props
            return (
              <div key={index} className="services-format">
                <h3>{ser.s_no}</h3>
                <h2>{ser.s_name}</h2>
                <p>{ser.s_desc}</p>
                <div className="services-readmore">
                  <p>Read More</p>
                  <img src={arrow_icon} alt="arrow icon" />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Service;
