import React from "react";
import "../App.css";

const SkillBar = ({ skillName, percentage }) => {
  const circleStyle = {
    background: `conic-gradient(#4caf50 0% ${percentage}%, #ddd ${percentage}% 100%)`,
  };

  return (
    <div className="skillBlock">
      <div className="skillimg">
        <i class="fa-brands fa-html5"></i>
        <p>{percentage}</p>
      </div>
      <p>{skillName}</p>
    </div>
  );
};

export default SkillBar;
