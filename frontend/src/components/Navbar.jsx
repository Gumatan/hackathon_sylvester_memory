import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/main">Game</Link>
    </div>
  );
}

export default Navbar;
