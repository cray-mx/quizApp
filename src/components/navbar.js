import React from "react";
import { Link } from "react-router-dom";
const navbar = ({ points }) => {
  return (
    <div className="navbar">
      <Link to="/">
        Qu<span>iz</span>
      </Link>
      <p className="points">
        Points <span>{points}</span>
      </p>
    </div>
  );
};

export default navbar;
