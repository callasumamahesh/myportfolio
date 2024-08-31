import React from 'react';
import '../App.css';

const SkillBar = ({ skillName, percentage }) => {
  return (
    <div className="skill-circle">
      <div className="circle" style={{ '--percentage': percentage / 100 }}>
        <div className="inner-circle">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
      <p className="skill-name">{skillName}</p>
    </div>
  );
};

export default SkillBar;
