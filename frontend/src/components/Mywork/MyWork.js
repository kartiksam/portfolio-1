import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div id="work" className="my-work">
      <div className="my-work-title">
        <h1>My Latest work</h1>
        <img src={theme_pattern} alt="themepattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          // here also can proviudd div but singlke image so no need
          return <img key={index} src={work.w_img} alt="work-image"></img>;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="arrow-image" />
      </div>
    </div>
  );
};

export default MyWork;
// one main vand isnide many ike in so r flex grid then all indide div with their data flex andddddddddddddddddd can porovide inner styling to them
