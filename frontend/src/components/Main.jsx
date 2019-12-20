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
      {console.log("renderMain")}
      <Navbar bdd={bdd} />
      <div id="lightBorder">
        <img id="guir1" src="guirlande.gif" alt="" />
        <img id="guir2" src="guirlande.gif" alt="" />
        <img id="guir3" src="guirlande.gif" alt="" />
      </div>
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
            alert("Cela ne fait rien de spécial");
          }}
        />
      </div>
    </div>
  );
}

export default Main;
