import React from "react";
import "../App.css";
function Blocks({icon,text,linkto}) {
  return (
    <div className="block">
      <a href={linkto} target="_blank" className="alink">
        <div className="icon">
          {icon}
        </div>
        <p>{text}</p>
      </a>
    </div>
  );
}

export default Blocks;
