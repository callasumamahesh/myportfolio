import React from 'react';
import '../App.css';

const SkillBar = ({ skillName, percentage }) => {
  const circleStyle = {
    background: `conic-gradient(#4caf50 0% ${percentage}%, #ddd ${percentage}% 100%)`,
  };

  return (
    <div className="skill-circle">
      <div className="circle" style={circleStyle}>
        <div className="inner-circle">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
      <p className="skill-name">{skillName}</p>
    </div>
  );
};

export default SkillBar;
