import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "./Game";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import "./Main.scss";
import "./traineau.css";
import bdd from "./appelbdd";

function Main() {
  return (
    <div className="main">
      <Navbar bdd={bdd} />
      <Switch>
        <Route
          path="/main/recipe/:id"
          component={props => <Recipe {...props} bdd={bdd} />}
        />

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
