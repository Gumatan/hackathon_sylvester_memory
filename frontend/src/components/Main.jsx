import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "./Game";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import "./Main.scss";
import "./traineau.css";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Switch>
        <Route path="/main/recipe" component={Recipe} />
        <Route path="/main" component={Game} />
      </Switch>

      <div>
        <img
          className="traineau"
          src="/traineau.gif"
          alt=""
          onClick={() => {
            alert("Cela ne fait rien de special");
          }}
        />
      </div>
    </div>
  );
}

export default Main;
