import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "./Game";
import Recipe from "./Recipe";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Switch>
        <Route path="/main/recipe" component={Recipe} />
        <Route path="/main" component={Game} />
      </Switch>
    </div>
  );
}

export default Main;
