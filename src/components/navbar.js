import React from "react";
import { Link } from "react-router-dom";
const navbar = ({ points, setPoints }) => {
  const resetHandler = (e) => {
    setPoints(0);
    localStorage.setItem("points", 0);
  };

  return (
    <div className="navbar">
      <Link to="/">
        Qu<span>iz</span>
      </Link>
      <p className="points">
        Points <span>{points}</span>
      </p>
      <button className="reset" onClick={resetHandler}>
        Reset Progress
      </button>
    </div>
  );
};

export default navbar;
