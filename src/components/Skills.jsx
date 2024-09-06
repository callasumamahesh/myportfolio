import React from "react";
import "../App.css";

const SkillBar = ({ skillName, percentage }) => {
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
