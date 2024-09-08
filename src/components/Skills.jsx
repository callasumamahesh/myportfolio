import React, { useEffect, useState } from 'react';
import '../App.css'; 

const SkillBar = ({ percentage, skillName, icon }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timer); 
  }, [percentage]);

  return (
    <div className="skill-bar-container">
      <div className="skill-circle">
        <div
          className="circle"
          style={{ background: `conic-gradient(#4caf50 ${progress * 3.6}deg, #ccc ${progress * 3.6}deg)` }}
        >
          <div className="circle-text">
          {icon}
          </div>
        </div>
      </div>
      <h3 className="skill-label">{skillName}</h3>
    </div>
  );
};

export default SkillBar;
