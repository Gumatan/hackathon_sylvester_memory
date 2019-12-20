import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink activeClassName="active" exact to="/main">
        Game
      </NavLink>
      {props.bdd.map(e => {
        return (
          <NavLink activeClassName="active" to={`/main/recipe/${e.id}`}>
            {e.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navbar;
