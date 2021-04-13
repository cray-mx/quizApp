import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        Qu<span>iz</span>
      </Link>
    </div>
  );
};

export default navbar;
