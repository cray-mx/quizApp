import React from "react";
import titleIcon from "../images/trophy.svg";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <p>Quiz</p>
        <img src={titleIcon} alt="Champion" />
      </div>
    </div>
  );
};

export default navbar;
